import { Suspense } from 'react';
import ApplicationsGraph from './ApplicationsGraph.tsx';
import Loading from './Loading.tsx';

import "./App.css";

function App () {
  return (
    <div className='app'>
      <Suspense fallback={<Loading />}>
        <ApplicationsGraph />
      </Suspense>
    </div>
  )
}

export default App;
