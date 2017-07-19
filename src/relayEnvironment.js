import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const store = new Store(new RecordSource());
const network = Network.create((operation, variables) =>
  fetch('https://kvwmw8vr7.lp.gql.zone/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  }),
);

const environment = new Environment({
  network,
  store,
});

export default environment;
