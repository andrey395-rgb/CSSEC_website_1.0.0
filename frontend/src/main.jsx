// Inside: src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// 2. Create the client
// We can use a relative path '/graphql' because our Vite proxy will catch it!
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// 3. Wrap your App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);