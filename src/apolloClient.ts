import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "replace-this-url-with-production-contacts-service-url"
      : "http://192.168.0.101:8001/graphql",
  cache: new InMemoryCache({
    // To remove `__typename` from the graphql-query-response.
    addTypename: false,
  }),
});

export default apolloClient;
