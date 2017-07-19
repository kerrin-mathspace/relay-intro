import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';

const App = () =>
  <QueryRenderer
    query={graphql`
      query {
        viewer {
          name
        }
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      if (error) return <div>Error</div>;
      if (!props) return <div>Loading</div>;
      return <div>{JSON.stringify(props)}</div>
    }}
  />;

export default App;
