'use client';

import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';

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
        direction: 0, // 0 = right, 90 = down
        columnSpacing: 50,
        layerSpacing: 80,
        alignOption: go.LayeredDigraphAlign.All // Add this
      })
    }).add(
      new go.Shape('Rectangle', {
        fill: 'transparent',
        stroke: 'transparent',
        strokeWidth: 0
      }),
      new go.Placeholder({ padding: 20 })
    );

    // ---------------- NODE TEMPLATES ----------------
    const nodeTemplateMap = new go.Map<string, go.Node>();

    // Vertical node template (top and bottom ports only)
    nodeTemplateMap.add(
      'vertical',
      new go.Node('Spot', {
        locationSpot: go.Spot.Center
      })
        .bind('location', 'location', go.Point.parse, go.Point.stringify)
        .add(
          new go.Shape('Ellipse', {
            width: 30,
            height: 30,
            fill: 'green'
          }),

          new go.TextBlock({
            font: 'bold 10px sans-serif',
            stroke: 'white'
          }).bind('text'),

          // Top port (transparent)
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

          // Bottom port (transparent)
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

          // Right port (transparent) - for Turn A to Gamma connection
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

    // Horizontal node template (left and right ports only) - DEFAULT
    nodeTemplateMap.add(
      '',
      new go.Node('Spot', {
        locationSpot: go.Spot.Center
      })
        .bind('location', 'location', go.Point.parse, go.Point.stringify)
        .add(
          new go.Shape('Ellipse', {
            width: 30,
            height: 30,
            fill: 'green'
          }),

          new go.TextBlock({
            font: 'bold 10px sans-serif',
            stroke: 'white'
          }).bind('text'),

          // Right port (transparent)
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
          }),

          // Left port (transparent)
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
          })
        )
    );

    diagram.nodeTemplateMap = nodeTemplateMap;

    // ---------------- LINK TEMPLATE ----------------
    diagram.linkTemplate = new go.Link({
      routing: go.Routing.Normal,
      curve: go.Curve.None,
      corner: 0
    }).add(
      new go.Shape({ strokeWidth: 2 }),
      new go.Shape({ toArrow: 'Standard' })
    );

    // ---------------- MODEL ----------------
    diagram.model = new go.GraphLinksModel({
      linkFromPortIdProperty: 'fromPort',
      linkToPortIdProperty: 'toPort',

      nodeDataArray: [
        { key: 1, text: 'Turn A', location: '-100 160', category: 'vertical' },
        { key: 2, text: 'Turn B', location: '-100 250', category: 'vertical' },

        // Vertical chain
        { key: 4, text: 'Turn 1', location: '-100 340', category: 'vertical' },
        { key: 5, text: 'Turn 2', location: '-100 430', category: 'vertical' },
        { key: 6, text: 'Turn 3', location: '-100 520', category: 'vertical' },

        // Group for horizontal layout
        { key: 100, isGroup: true, location: '350 180' },

        // Gamma and horizontal nodes (now in group)
        { key: 3, text: 'Gamma', group: 100 },
        { key: 7, text: 'H1', group: 100 },
        { key: 8, text: 'H2', group: 100 },
        { key: 9, text: 'H3', group: 100 },
        { key: 14, text: 'H4', group: 100 },

        // H2 children (in group)
        { key: 10, text: 'H2-A', group: 100 },
        { key: 11, text: 'H2-B', group: 100 },

        // H3 children (in group)
        { key: 12, text: 'H3-A', group: 100 },
        { key: 13, text: 'H3-B', group: 100 }
      ],

      linkDataArray: [
        // Vertical main chain
        { from: 1, to: 2, fromPort: 'bottom', toPort: 'top' },
        { from: 2, to: 4, fromPort: 'bottom', toPort: 'top' },
        { from: 4, to: 5, fromPort: 'bottom', toPort: 'top' },
        { from: 5, to: 6, fromPort: 'bottom', toPort: 'top' },

        // Turn A → Gamma (link into group)
        { from: 1, to: 3, fromPort: 'right', toPort: 'left' },

        // Horizontal chain
        { from: 3, to: 7, fromPort: 'right', toPort: 'left' },
        { from: 7, to: 8, fromPort: 'right', toPort: 'left' },

        // H1 is parent of H3
        { from: 7, to: 9, fromPort: 'right', toPort: 'left' },
        { from: 7, to: 14, fromPort: 'right', toPort: 'left' },

        // H2 children
        { from: 8, to: 10, fromPort: 'right', toPort: 'left' },
        { from: 8, to: 11, fromPort: 'right', toPort: 'left' },

        // H3 children
        { from: 9, to: 12, fromPort: 'right', toPort: 'left' },
        { from: 9, to: 13, fromPort: 'right', toPort: 'left' }
      ]
    });

    return () => {
      diagram.div = null;
    };
  }, []);

  return (
    <div className='flex h-screen w-full items-center justify-center bg-gray-50'>
      <div className='rounded-lg bg-white p-6 shadow-lg'>
        <h1 className='mb-4 text-2xl font-bold text-gray-800'>GoJS Diagram</h1>
        <div
          ref={diagramRef}
          className='rounded border-2 border-gray-300'
          style={{ width: 1000, height: 800 }}
        />
      </div>
    </div>
  );
}
