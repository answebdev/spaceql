const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// Graphiql is a tool that can be used as a client to make queries to a server.

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
