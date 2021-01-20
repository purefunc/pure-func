import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient,InMemoryCache} from '@apollo/client'
import {createUploadLink} from "apollo-upload-client"
import {ApolloProvider} from "@apollo/react-hooks"
import {AuthProvider} from "./global/auth"

import './styles/index.scss';

const uploadLink = createUploadLink({
  credentials: "include",
  uri: "/graphql"
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink,
})

const ClientApp = () => (
  <ApolloProvider client={client}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ApolloProvider>
)

ReactDOM.render(
  <React.StrictMode>
    <ClientApp />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
