import './index.css';
import Routes from './routes'
import ApolloClient from "apollo-boost";
import React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "https://localhost:3000/graphql"
  });

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));