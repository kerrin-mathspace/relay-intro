// @flow
import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import type { FriendFragment } from './__generated__/FriendFragment.graphql.js';

const Friend = ({ data }: { data: FriendFragment }) => {
  return (
    <div>
      {data.map(f => <div>{f.name}</div>)}
    </div>
  );
};

export default createFragmentContainer(
  Friend,
  graphql`
  fragment FriendFragment on Friend @relay(plural: true) {
    name
  }
`,
);
