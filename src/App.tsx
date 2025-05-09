import { useQuery, gql } from '@apollo/client';
import ApplicationsGraph from './ApplicationsGraph.js';

const GET_APPLICATION_GRAPH = gql`
  query ApplicationGraph {
    applicationGraph {
      id
    }
  }
`;

function App() {
  const { data } = useQuery(GET_APPLICATION_GRAPH);
  console.log("applicationGraph data ", data?.applicationGraph);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ApplicationsGraph />
    </div>
  )
}

export default App
