import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import Friend from './Friend.js';

const FriendsList = ({ data }) => {
  debugger;
  return (
    <div>
      <ul>
        {data.friends.map((f, i) => <Friend key={i} data={f} />)}
      </ul>
    </div>
  );
};

export default createFragmentContainer(
  FriendsList,
  graphql`
  fragment FriendsListFragment on User {
    friends {
      ...FriendFragment
    }
  }
`,
);
