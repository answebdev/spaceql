const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

// Video 1: https://www.youtube.com/watch?v=SEMTj8w04Z8
// Code: https://github.com/bradtraversy/spacex_launch_stats
// SpaceX API: https://github.com/r-spacex/SpaceX-API
// SpaceX API Docs: https://docs.spacexdata.com/

// Graphiql is a tool that can be used as a client to make queries to a server.

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
