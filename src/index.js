import { GraphQLServer } from 'graphql-yoga';

//Type defination
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'This is my first query!'
        },
        name() {
            return 'P7rox'
        },
        location() {
            return 'Lank of kings'
        },
        bio(){
            return `
                Praise the almighty King og kings!
                The Emperor!!!!!
            `
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