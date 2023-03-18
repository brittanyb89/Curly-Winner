const express = require("express");
// Import ApolloServer class
const { ApolloServer } = require("apollo-server-express");
// Import the typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
// const path = require("path");
const db = require("./config/connection");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
