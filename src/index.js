import { GraphQLServer } from 'graphql-yoga';

//Type defination
const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float
    }
`

// Resolvers
const resolvers = {
    Query: {
        id() {
            return 'haha'
        },
        name() {
            return 'P7rox'
        },
        age() {
            return 44
        },
        employed() {
            return true
        },
        gpa() {
            return null
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('The server is running!')
});