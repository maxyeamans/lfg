const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// // Passport-specific modules
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const passportJWT = require("passport-jwt");
// const JWTStrategy = passportJWT.Strategy;
// const bcrypt = require("bcrypt");
// const authRoutes = require("./auth");

// // Import the User model for passport strategy definition
// const UserModel = require("../models/User");

// // Secret for making cookies
// // TODO: Store this in an environment variable
// const SECRET = "danny katri max mike";

// // Define passport strategy
// // This extracts username and password from req.body and verifies the user by verifying it against the User table.
// passport.use(new LocalStrategy({
//   // Code below specifies what passport will use for username and password
//   usernameField: username,
//   passwordField: password,
// }, async (username, password, done) => {
//   try {
//     const userDocument = await UserModel.findOne({ username: username }).exec();
//     const passwordsMatch = await bcrypt.compare(password, userDocument.password);

//     if (passwordsMatch) {
//       return done(null, userDocument);
//     } else {
//       return done('Incorrect Username / Password');
//     }
//   } catch (error) {
//     done(error);
//   }
// }));

// // Define the JWT strategy
// // This extracts the JWT from the cookie, and uses the application’s secret to verify its signature.
// passport.use(new JWTStrategy({
//   // Below is a reallllly simplified way of returning the token from the cookie in the request
//   jwtFromRequest: req => req.cookies.jwt,
//   secretOrKey: secret,
// },
//   (jwtPayload, done) => {
//     if (jwtPayload.expires > Date.now()) {
//       return done('jwt expired');
//     }

//     return done(null, jwtPayload);
//   }
// ));

// API Routes
router.use("/api", apiRoutes);
// Passport secured regiter/login routes
// router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;