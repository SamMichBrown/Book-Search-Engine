const express = require('express');

const { ApolloServer } = require('apollo-server-express');

// IMPORT TYPDEFS AND RESOLVERS //
const { typeDefs, resolvers } = require('./schemas');

const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// CREATE NEW APOLLO SERVER AND PASS IT INTO SCHEMA //
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// INTEGRATE APOLLO SERVER //
server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: false }));

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
