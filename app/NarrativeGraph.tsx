'use client';

import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';
import { turnData, turnChildrenData } from './data';
import { transformToGoJS } from './transformData';

// Color map per node type
const NODE_COLORS: Record<string, string> = {
  turn: '#3b82f6', // blue
  agent: '#10b981', // green
  tool: '#f59e0b' // amber
};

export default function DiagramComponent() {
  const diagramRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!diagramRef.current) return;

    const diagram = new go.Diagram(diagramRef.current, {
      'undoManager.isEnabled': true,
      layout: new go.Layout() // No automatic layout for main diagram
    });

    // ---------------- GROUP TEMPLATE ----------------
    diagram.groupTemplate = new go.Group('Auto', {
      layout: new go.LayeredDigraphLayout({
        direction: 0, // 0 = left-to-right
        columnSpacing: 50,
        layerSpacing: 80,
        alignOption: go.LayeredDigraphAlign.All
      })
    }).add(
      new go.Shape('Rectangle', {
        fill: 'rgba(200, 200, 200, 0.1)',
        stroke: '#d1d5db',
        strokeWidth: 1,
        strokeDashArray: [4, 4]
      }),
      new go.Placeholder({ padding: 20 })
    );

    // ---------------- NODE TEMPLATES ----------------
    const nodeTemplateMap = new go.Map<string, go.Node>();

    // Vertical node template (turn + agent nodes: top, bottom, right ports)
    nodeTemplateMap.add(
      'vertical',
      new go.Node('Spot', {
        locationSpot: go.Spot.Center
      })
        .bind('location', 'location', go.Point.parse, go.Point.stringify)
        .add(
          new go.Shape('RoundedRectangle', {
            width: 140,
            height: 40,
            strokeWidth: 0
          }).bind('fill', 'type', (t: string) => NODE_COLORS[t] || '#6b7280'),

          new go.TextBlock({
            font: 'bold 11px sans-serif',
            stroke: 'white',
            margin: 6,
            overflow: go.TextOverflow.Ellipsis,
            maxSize: new go.Size(130, NaN)
          }).bind('text'),

          // Top port
          new go.Shape('Circle', {
            width: 2,
            height: 2,
            fill: 'transparent',
            stroke: 'transparent',
            portId: 'top',
            alignment: go.Spot.Top,
            fromSpot: go.Spot.Top,
            toSpot: go.Spot.Top,
            fromLinkable: true,
            toLinkable: true
          }),

          // Bottom port
          new go.Shape('Circle', {
            width: 2,
            height: 2,
            fill: 'transparent',
            stroke: 'transparent',
            portId: 'bottom',
            alignment: go.Spot.Bottom,
            fromSpot: go.Spot.Bottom,
            toSpot: go.Spot.Bottom,
            fromLinkable: true,
            toLinkable: true
          }),

          // Right port (connects to tool groups)
          new go.Shape('Circle', {
            width: 2,
            height: 2,
            fill: 'transparent',
            stroke: 'transparent',
            portId: 'right',
            alignment: go.Spot.Right,
            fromSpot: go.Spot.Right,
            toSpot: go.Spot.Right,
            fromLinkable: true,
            toLinkable: true
          })
        )
    );

    // Horizontal node template (tool nodes: left + right ports) - DEFAULT
    nodeTemplateMap.add(
      '',
      new go.Node('Spot', {
        locationSpot: go.Spot.Center
      })
        .bind('location', 'location', go.Point.parse, go.Point.stringify)
        .add(
          new go.Shape('RoundedRectangle', {
            width: 140,
            height: 40,
            strokeWidth: 0
          }).bind('fill', 'type', (t: string) => NODE_COLORS[t] || '#6b7280'),

          new go.TextBlock({
            font: 'bold 11px sans-serif',
            stroke: 'white',
            margin: 6,
            overflow: go.TextOverflow.Ellipsis,
            maxSize: new go.Size(130, NaN)
          }).bind('text'),

          // Left port
          new go.Shape('Circle', {
            width: 2,
            height: 2,
            fill: 'transparent',
            stroke: 'transparent',
            portId: 'left',
            alignment: go.Spot.Left,
            fromSpot: go.Spot.Left,
            toSpot: go.Spot.Left,
            fromLinkable: true,
            toLinkable: true
          }),

          // Right port
          new go.Shape('Circle', {
            width: 2,
            height: 2,
            fill: 'transparent',
            stroke: 'transparent',
            portId: 'right',
            alignment: go.Spot.Right,
            fromSpot: go.Spot.Right,
            toSpot: go.Spot.Right,
            fromLinkable: true,
            toLinkable: true
          })
        )
    );

    diagram.nodeTemplateMap = nodeTemplateMap;

    // ---------------- LINK TEMPLATE ----------------
    diagram.linkTemplate = new go.Link({
      routing: go.Routing.Normal,
      curve: go.Curve.Bezier,
      corner: 5
    })
      .bind('curviness')
      .add(
        new go.Shape({ strokeWidth: 1.5, stroke: '#6b7280' }),
        new go.Shape({
          toArrow: 'Standard',
          fill: '#6b7280',
          stroke: null,
          scale: 1.2
        }),
        new go.TextBlock({
          font: '9px sans-serif',
          stroke: '#374151',
          segmentOffset: new go.Point(0, -10),
          segmentFraction: 0.5
        }).bind('text')
      );

    // ---------------- TRANSFORM & SET MODEL ----------------
    // Build turn_id → turnChildrenData map
    const turnChildrenMap = new Map<string, typeof turnChildrenData>();
    for (const turnObj of turnData.turn_ids) {
      for (const turnId of Object.keys(turnObj)) {
        turnChildrenMap.set(turnId, turnChildrenData);
      }
    }
    const { nodeDataArray, linkDataArray } = transformToGoJS(
      turnData,
      turnChildrenMap
    );

    diagram.model = new go.GraphLinksModel({
      linkFromPortIdProperty: 'fromPort',
      linkToPortIdProperty: 'toPort',
      nodeDataArray,
      linkDataArray
    });

    return () => {
      diagram.div = null;
    };
  }, []);

  return (
    <div className='flex h-screen w-full items-center justify-center bg-gray-50'>
      <div className='rounded-lg bg-white p-6 shadow-lg'>
        <h1 className='mb-4 text-2xl font-bold text-gray-800'>
          Narrative Graph
        </h1>
        <div
          ref={diagramRef}
          className='rounded border-2 border-gray-300'
          style={{ width: 1200, height: 800 }}
        />
      </div>
    </div>
  );
}
