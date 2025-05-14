import { useCallback, useLayoutEffect } from 'react';
import { useSuspenseQuery, gql } from '@apollo/client';
import ELK from 'elkjs/lib/elk.bundled.js';
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  useReactFlow
} from '@xyflow/react';

import AnnotationNode from './AnnotationNode';
import ToolbarNode from './ToolbarNode';
import ResizerNode from './ResizerNode';
import CircleNode from './CircleNode';
import TextInputNode from './TextInputNode';
import ButtonEdge from './ButtonEdge';

import '@xyflow/react/dist/style.css';

const GET_APPLICATION_GRAPH = gql`
  query ApplicationGraph {
    applicationGraph {
      id
    }
  }
`;

const GET_SYSTEMS = gql`
  query Systems {
    systems {
      id
    }
  }
`;

const nodeTypes = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextInputNode
};

const edgeTypes = {
  button: ButtonEdge
};

const nodeClassName = (node) => node.type;

const elk = new ELK();

const elkOptions = {
  'elk.algorithm': 'layered',
  'elk.layered.spacing.nodeNodeBetweenLayers': '100',
  'elk.spacing.nodeNode': '80',
};

const getLayoutedElements = (nodes, edges, options = {}) => {
  const isHorizontal = options?.['elk.direction'] === 'RIGHT';
  const graph = {
    id: 'root',
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      // Adjust the target and source handle positions based on the layout
      // direction.
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',

      // Hardcode a width and height for elk to use when layouting.
      width: 150,
      height: 50,
    })),
    edges: edges,
  };

  return elk
    .layout(graph)
    .then((layoutedGraph) => ({
      nodes: layoutedGraph.children.map((node) => ({
        ...node,
        // React Flow expects a position property on the node instead of `x`
        // and `y` fields.
        position: { x: node.x, y: node.y },
      })),

      edges: layoutedGraph.edges,
    }))
    .catch(console.error);
};

function ApplicationsGraph() {
  const {
    data: {
      applicationGraph: {
        getApplicationGraph: {
          apps,
          appToHost
        }
      }
    }
  } = useSuspenseQuery(GET_APPLICATION_GRAPH);

  const { data: systems } = useSuspenseQuery(GET_SYSTEMS);

  console.log("applicationGraph data ", apps, systems, elk);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const normalizedNodes = apps?.map((item) => {
    return {
      id: item.id,
      draggable: true,
      data: { label: item.name },
      position: { x: 0, y: 0}
    };
  });

  const normalizeEdges = appToHost.map((item) => {
    return {
      id: `${item.appId}-${item.hostId}`,
      source: item.appId,
      target: item.hostId,
      type: 'smoothstep'
    };
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(normalizedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(normalizeEdges);
  const { fitView } = useReactFlow();

  const onLayout = useCallback(
    ({ direction, useInitialNodes = false }) => {
      const opts = { 'elk.direction': direction, ...elkOptions };
      const ns = useInitialNodes ? nodes : nodes;
      const es = useInitialNodes ? edges : edges;
 
      getLayoutedElements(ns, es, opts).then(
        ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
          setNodes(layoutedNodes);
          setEdges(layoutedEdges);
          fitView();
        }
      );
    },
    [nodes, edges, setEdges, setNodes, fitView],
  );

  useLayoutEffect(() => {
    onLayout({ direction: 'DOWN'});
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        attributionPosition="top-right"
        style={{ backgroundColor: "#F7F9FB" }}
      >
        <MiniMap zoomable pannable nodeClassName={nodeClassName} />

        <Controls />

        <Background />
      </ReactFlow>
    </div>
  )
}

const ReactFlowWithProvider = () => (
  <ReactFlowProvider>
    <ApplicationsGraph />
  </ReactFlowProvider>
);

export default ReactFlowWithProvider;
