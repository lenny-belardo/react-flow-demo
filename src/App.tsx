import { useQuery, gql } from '@apollo/client';

const GET_APPLICATION_GRAPH = gql`
  query ApplicationGraph {
    applicationGraph {
      id
    }
  }
`;

function App() {
  const { data } = useQuery(GET_APPLICATION_GRAPH);
  console.log("applicationGraph data ", data.applicationGraph);

  return (
    <>
      Brand new
    </>
  )
}

export default App
