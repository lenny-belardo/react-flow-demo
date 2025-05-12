import { MarkerType } from "@xyflow/react";

const nodes = [{
  id: '1',
  draggable: true,

  data: { label: 'Node' },
  position: { x: 0, y: 50 }
}, {
  id: '2',
  draggable: true,
  data: { label: 'Node' },
  position: { x: 0, y: 100 }
}];

const edges = [{
//     id: 'e1-2',
//     source: '1-1',
//     target: '1-2',
//     label: 'edge',
//     type: 'smoothstep'
// }, {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    label: "animated edge"
}];

export {
    edges,
    nodes
};
