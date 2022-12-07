const {gql} = require("apollo-server");

// this graphlQL wrapper basically lets us create a graphQL schema which will be interpreted from a javascript string
module.exports = gql`
type Structure {
    name: String!
    id: ID!
    description: String
  }
    type Query{
        Structure(name: String): Structure!
    }
   `;
