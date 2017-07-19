import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import FriendsList from './FriendsList.js';
import Friend from './Friend.js';

// Presentational component
const User = ({ data }) => (
  <div>
    <h1>{data.name}</h1>
    <Friend data={data.friends} />
  </div>
);

export default createFragmentContainer(User, graphql`
  fragment UserFragment on User {
    name
    friends {
      ...FriendFragment
    }
  }
`);
