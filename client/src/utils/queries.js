// this holds the query GET_ME, which will execute the me query set up using Apollo Server.
const { gql } = require("@apollo/client");

export const GET_ME = gql`
  # create a GraphQL query that executes the me query set up using Apollo Server
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
