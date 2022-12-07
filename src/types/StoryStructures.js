const {gql} = require("apollo-server");

// this graphlQL wrapper basically lets us create a graphQL schema which will be interpreted from a javascript string
module.exports = gql`
type StoryStructure {
    name: String!
    id: ID!
    structure: [Structure!]
    themes: Theme
    examples: [String]
  }
    type Query{
        StoryStructure(name: String!): StoryStructure!
    }
   `;

   