'use strict'
const {makeExecutableSchema} = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
  type Message {
    id: ID!
    content: String!
  }

  type Query {
    allMessages: [Message!]!
  }
`
/*
todo: define some "type Mutation {}"
todo: define some "input foo {}"
*/

// Generate the schema object from types definition aed resolvers
module.exports = makeExecutableSchema({typeDefs, resolvers})
