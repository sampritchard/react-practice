// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Routes from './routes'

// import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-boost";

// ReactDOM.render(
//     <ApolloProvider client={client}>
//       <Routes />
//     </ApolloProvider>,
//     document.getElementById('root'),
//   );

// ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "https://localhost:3000/graphql"
  });

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));