const { gql } = require('apollo-server');

const typeDefs = gql`
  type StoryStructure {
    name: String!
    id: ID!
    structure: [Structure!]
    themes: Themes
    examples: [String]
  }

  type Structure {
    name: String!
    id: ID1
    description: String
  }

  type Theme {
    name: String!
    id: ID!
    description: String
  }

  type Query {
    storyStructure(name: String!): StoryStructure!
    Structure(name: String): Structure!
  }
`;

module.exports = typeDefs;