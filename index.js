import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const app = express();

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

app.use('/graphiql', 
    graphiqlExpress({
        endpointURL: '/graphql'
    })
);

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

models.sequelize.sync().then(() => app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
}));