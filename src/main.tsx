import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App.tsx';

import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:5173/',
  cache: new InMemoryCache()
});

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import ('./mocks/browser');

  return worker.start();
}

enableMocking().then(() => createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
))
