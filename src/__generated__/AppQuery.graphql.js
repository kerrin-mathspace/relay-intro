/**
 * @flow
 * @relayHash c5ca84e28058e3ee04ed5aafc348aab9
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppQueryResponse = {|
  +viewer: ?{|
    +name: ?string;
  |};
|};
*/


/*
query AppQuery {
  viewer {
    name
    ...UserFragment
  }
}

fragment UserFragment on User {
  name
  ...FriendsListFragment
}

fragment FriendsListFragment on User {
  friends {
    ...FriendFragment
  }
}

fragment FriendFragment on Friend {
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "UserFragment",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Friend",
            "name": "friends",
            "plural": true,
            "selections": [
              {
                "kind": "InlineFragment",
                "type": "Friend",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppQuery {\n  viewer {\n    name\n    ...UserFragment\n  }\n}\n\nfragment UserFragment on User {\n  name\n  ...FriendsListFragment\n}\n\nfragment FriendsListFragment on User {\n  friends {\n    ...FriendFragment\n  }\n}\n\nfragment FriendFragment on Friend {\n  name\n}\n"
};

module.exports = batch;
