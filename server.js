const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

// Video 1: https://www.youtube.com/watch?v=SEMTj8w04Z8
// Video 2: https://www.youtube.com/watch?v=-XwkFm5a9lw
// Code: https://github.com/bradtraversy/spacex_launch_stats
// SpaceX API: https://github.com/r-spacex/SpaceX-API
// SpaceX API Docs: https://docs.spacexdata.com/

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
