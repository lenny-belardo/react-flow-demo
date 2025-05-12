import { useCallback } from 'react';
import { useQuery, useSuspenseQuery, gql } from '@apollo/client';
import { ReactFlow, addEdge,   MiniMap,
  Controls,
  Background,useEdgesState, useNodesState } from '@xyflow/react';
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
  const { data: applicationGraph } = useSuspenseQuery(GET_APPLICATION_GRAPH);
  const { data: systems } = useSuspenseQuery(GET_SYSTEMS);

  console.log("applicationGraph data ", applicationGraph, systems);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
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