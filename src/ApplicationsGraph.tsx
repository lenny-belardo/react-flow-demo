import { useCallback, useEffect } from 'react';
import { useSuspenseQuery, gql } from '@apollo/client';
import {
  ReactFlow,
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState
} from '@xyflow/react';
import {
  nodes as initialNodes,
  edges as initialEdges
} from './initial-elements.jsx';
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

function ApplicationsGraph() {
  const {
    data: {
      applicationGraph: {
        getApplicationGraph: {
          apps
        }
      }
    }} = useSuspenseQuery(GET_APPLICATION_GRAPH);
  const { data: systems } = useSuspenseQuery(GET_SYSTEMS);

  console.log("applicationGraph data ", apps, systems);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    if (apps.length) {
      const normalizedNodes = apps?.map((item, index) => {
        return {
          id: item.id,
          draggable: true,
          data: { label: item.name },
          position: { x: 0, y: 50 * index }
        };
      });

      const MOCK_EDGES = [{
        id: 'ea-b',
        source: 'app-id-aaaa',
        target: 'app-id-bbbb',
        label: 'edge',
        type: 'smoothstep'
      }, {
        id: 'eb-c',
        source: 'app-id-bbbb',
        target: 'app-id-cccc',
        label: 'edge',
        type: 'smoothstep'
      }, {
        id: 'ec-d',
        source: 'app-id-cccc',
        target: 'app-id-dddd',
        label: 'edge',
        type: 'smoothstep'
      }, {
        id: 'ed-a',
        source: 'app-id-dddd',
        target: 'app-id-aaaa',
        label: 'edge',
        type: 'smoothstep'
      }];

      setNodes(normalizedNodes);
      setEdges(MOCK_EDGES);
    }
  }, [apps, setEdges, setNodes]);

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

        <Background  />
      </ReactFlow>
    </div>
  )
}

export default ApplicationsGraph