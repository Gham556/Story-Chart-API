const {gql} = require("apollo-server");

// this graphlQL wrapper basically lets us create a graphQL schema which will be interpreted from a javascript string
module.exports = gql`
type StoryStructures {
    name: String!
    id: ID
    structure: [Structures]
    themes: [Themes]
    examples: [String]
  }
type Query{
    stories(name: String): StoryStructures!
  }

input CreateStoryInput{
    name: String!
  }  

type Mutation{
  createStory(input: CreateStoryInput!): StoryStructures!
  }
   `;

   