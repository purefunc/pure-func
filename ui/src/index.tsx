import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './layouts/App'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { HelmetProvider } from 'react-helmet-async'
import './styles/index.scss'

const isProd = Boolean(window.location.host.indexOf('purefunc.io') > -1);
const apiUrl = isProd ? 'https://api.purefunc.io/graphql' : 'http://localhost:8000/graphql';

const uploadLink = createUploadLink({
  credentials: 'include',
  uri: apiUrl,
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink,
})

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
