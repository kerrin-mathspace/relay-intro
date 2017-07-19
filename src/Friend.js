// @flow
import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import type { FriendFragment } from './__generated__/FriendFragment.graphql.js';

const Friend = ({ data }: { data: FriendFragment }) => {
  debugger;
  return (
    <li>
      {data.name}
    </li>
  );
};

export default createFragmentContainer(
  Friend,
  graphql`
  fragment FriendFragment on Friend {
    name
  }
`,
);
