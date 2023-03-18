// import the User model
import { User } from "../models";

// Create a function that fulfills the query defined in 'typeDefs.js'
const resolvers = {
  Query: {
    // returns user type
    async me() {
      return await User.findOne();
    },
  },
  Mutation: {
    // Accepts email and password as parameters; returns an Auth type
    async login() {
      return await User.login();
    },
    // Accepts a username, email, and password as parameters; returns an Auth type
    async addUser() {
      return await User.create();
    },
    // Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type
    async saveBook() {
      return await User.update();
    },
    // Accepts a book's bookId as a parameter; returns a User type
    async removeBook() {
      return await User.update();
    },
  },
};
