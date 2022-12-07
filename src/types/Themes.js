const {gql} = require("apollo-server");

// this graphlQL wrapper basically lets us create a graphQL schema which will be interpreted from a javascript string
module.exports = gql`
type Theme {
    name: String!
    id: ID!
    description: String
  }

  type Query {
    Theme: Theme!
  }
   `;
