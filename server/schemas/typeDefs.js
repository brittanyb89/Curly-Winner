const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Define Query type: me (returns a User type)
  type Query {
    "Get the logged in user"
    me: User
  }
  # Define Mutation type: login (accepts an email and password as parameters; returns an Auth type)
  type Mutation {
    "Login user"
    login(email: String!, password: String!): Auth
    # Define Mutation type: addUser (accepts a username, email, and password as parameters; returns an Auth type)
    "Add user"
    addUser(username: String!, email: String!, password: String!): Auth
    # Define Mutation type: saveBook (accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type)
    "Save book"
    saveBook(bookData: BookInput!): User
    # Define Mutation type: removeBook (accepts a book's bookId as a parameter; returns a User type)
    "Remove book"
    removeBook(bookId: ID!): User
  }
  # Define user type: _id, username, email, bookCount, savedBooks (an array of the Book type)
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  # Define book type: bookId, authors, description, title, image, link
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }
  # Define auth type: token, user (a User type)
  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    "ISBN"
    bookId: ID!
    authors: [String!]!
    description: String
    "URL to book cover image"
    image: String
    "URL to book on Google Books"
    link: String
    title: String!
  }
`;

module.exports = typeDefs;
