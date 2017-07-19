import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from './relayEnvironment.js';
import User from './User.js';

const query = graphql`
  query AppQuery {
    viewer {
      name
      ...UserFragment
    }
  }
`;

const App = () =>
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{}}
    render={({ error, props }) => {
      if (error) return <div>Error {error.toString()}</div>;
      if (!props) return <div>Loading</div>;
      return (
        <div>
          <User data={props.viewer} />
        </div>
      );
    }}
  />;

export default App;
