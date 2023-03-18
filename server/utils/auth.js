const jwt = require("jsonwebtoken");

// set token secret and expiration date
// const secret = "mysecretsshhhhh";
// const expiration = "2h";

//TODO: Update the auth middleware function to work with the GraphQL API
export function formatCurrentDateTime() {
  const current = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return current.toLocaleDateString("en-US", options);
}

export const generateToken = (payload) => {
  return jwt.sign({ data: payload }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

// module.exports = {
//   // TODO: function for our authenticated routes
//   authMiddleware: function (req, res, next) {
//     // TODO: allows token to be sent via  req.query or headers
//     let token = req.query.token || req.headers.authorization;

//     // ["Bearer", "<tokenvalue>"]
//     if (req.headers.authorization) {
//       token = token.split(" ").pop().trim();
//     }

//     if (!token) {
//       return res.status(400).json({ message: "You have no token!" });
//     }

//     // TODO: verify token and get user data out of it
//     try {
//       const { data } = jwt.verify(token, secret, { maxAge: expiration });
//       req.user = data;
//     } catch {
//       console.log("Invalid token");
//       return res.status(400).json({ message: "invalid token!" });
//     }

//     // TODO: send to next endpoint
//     next();
//   },
//   signToken: function ({ username, email, _id }) {
//     const payload = { username, email, _id };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };
