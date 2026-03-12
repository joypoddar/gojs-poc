/**
 * Transforms turnData + turnChildrenData into GoJS-compatible
 * nodeDataArray and linkDataArray.
 *
 * Vertical chain: turns from turnData.turn_ids
 * Horizontal group per turn: all agents + tools from turnChildrenData
 */

interface ResponseNode {
  id: string;
  type: string;
  name: string;
  [key: string]: unknown;
}

interface ResponseEdge {
  id: string;
  edge_type: string;
  edge_label: string;
  from_node: string;
  to_node: string;
  step_number: number;
  context_id: string | null;
  parent_context_id: string | null;
  parent_edge_id: string | null;
  parallel_group_id: string | null;
  is_concurrent: boolean;
  status: { code: string; message: string | null };
  [key: string]: unknown;
}

interface TurnChildrenData {
  graph_metadata: Record<string, unknown>;
  nodes: ResponseNode[];
  edges: ResponseEdge[];
}

interface TurnData {
  fact_id: string;
  num_turns: number;
  start_time: string;
  end_time: string;
  turn_ids: Record<string, unknown>[];
}

export interface GoJSNodeData {
  key: string;
  text: string;
  type: string;
  category: string; // 'vertical' | '' (horizontal)
  group?: string;
  isGroup?: boolean;
  location?: string;
}

export interface GoJSLinkData {
  from: string;
  to: string;
  fromPort: string;
  toPort: string;
  text: string;
  edgeType: string;
  curviness?: number;
}

/**
 * Build the graph.
 * turnChildrenMap maps turn_id → TurnChildrenData for each turn.
 */
export function transformToGoJS(
  turnData: TurnData,
  turnChildrenMap: Map<string, TurnChildrenData>
): {
  nodeDataArray: GoJSNodeData[];
  linkDataArray: GoJSLinkData[];
} {
  const nodeDataArray: GoJSNodeData[] = [];
  const linkDataArray: GoJSLinkData[] = [];

  // ----- Step 1: Extract turn IDs in order -----
  const turnIds: string[] = [];
  for (const turnObj of turnData.turn_ids) {
    for (const turnId of Object.keys(turnObj)) {
      turnIds.push(turnId);
    }
  }

  // ----- Step 2: Build vertical turn chain -----
  const VERTICAL_X = -100;
  const VERTICAL_START_Y = 100;
  const VERTICAL_SPACING = 90;

  for (let i = 0; i < turnIds.length; i++) {
    const turnId = turnIds[i];
    const y = VERTICAL_START_Y + i * VERTICAL_SPACING;

    // Turn node (vertical)
    nodeDataArray.push({
      key: `turn:${turnId}`,
      text: `Turn ${i + 1}`,
      type: 'turn',
      category: 'vertical',
      location: `${VERTICAL_X} ${y}`
    });

    // Vertical chain link between consecutive turns
    if (i > 0) {
      linkDataArray.push({
        from: `turn:${turnIds[i - 1]}`,
        to: `turn:${turnId}`,
        fromPort: 'bottom',
        toPort: 'top',
        text: '',
        edgeType: 'TURN_CHAIN'
      });
    }
  }

  // ----- Step 3: For each turn, create a horizontal group with its children -----
  for (const turnId of turnIds) {
    const childrenData = turnChildrenMap.get(turnId);
    if (!childrenData) continue;

    const groupKey = `group:${turnId}`;

    // Group node
    nodeDataArray.push({
      key: groupKey,
      text: '',
      type: 'group',
      category: '',
      isGroup: true
    });

    // Link turn → first agent in the group (the INVOKES target)
    const invokesEdge = childrenData.edges.find(
      (e) => e.edge_type === 'INVOKES'
    );

    if (invokesEdge) {
      linkDataArray.push({
        from: `turn:${turnId}`,
        to: invokesEdge.to_node,
        fromPort: 'right',
        toPort: 'left',
        text: String(invokesEdge.step_number),
        edgeType: 'INVOKES'
      });
    }

    // All children nodes go into the group (agents + tools, skip the turn node)
    for (const node of childrenData.nodes) {
      if (node.type === 'turn') continue;

      nodeDataArray.push({
        key: node.id,
        text: node.name,
        type: node.type,
        category: '', // horizontal, laid out by group
        group: groupKey
      });
    }

    // All edges become horizontal links inside the group
    // (skip INVOKES — handled as turn→agent link above)
    const groupEdges = childrenData.edges.filter(
      (e) => e.edge_type !== 'INVOKES'
    );

    // Track pair counts for curviness spread
    const pairCounts = new Map<string, number>();
    for (const edge of groupEdges) {
      const pairKey = `${edge.from_node}|${edge.to_node}`;
      pairCounts.set(pairKey, (pairCounts.get(pairKey) || 0) + 1);
    }

    const pairIndex = new Map<string, number>();

    for (const edge of groupEdges) {
      const pairKey = `${edge.from_node}|${edge.to_node}`;
      const total = pairCounts.get(pairKey) || 1;
      const idx = pairIndex.get(pairKey) || 0;
      pairIndex.set(pairKey, idx + 1);

      const link: GoJSLinkData = {
        from: edge.from_node,
        to: edge.to_node,
        fromPort: 'right',
        toPort: 'left',
        text: String(edge.step_number),
        edgeType: edge.edge_type
      };

      // Spread overlapping links with curviness offset
      if (total > 1) {
        const midpoint = (total - 1) / 2;
        link.curviness = (idx - midpoint) * 12;
      }

      linkDataArray.push(link);
    }
  }

  return { nodeDataArray, linkDataArray };
}
