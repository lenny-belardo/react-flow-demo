import { Suspense } from 'react';
import ApplicationsGraph from './ApplicationsGraph.js';

function App () {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <ApplicationsGraph />
      </Suspense>
    </div>
  )
}

export default App;
