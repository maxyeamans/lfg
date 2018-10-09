const router = require("express").Router();
const groupRoutes = require("./group");
const userRoutes = require("./user");
const loginRoutes = require("./login");
// const profileRoutes = require("./profile");

// User routes
router.use("/users", userRoutes);
// Profile routes
// router.use("/profiles", profileRoutes);
// Group routes
router.use("/groups", groupRoutes);
// Login routes
router.use("/login", loginRoutes);

module.exports = router;
