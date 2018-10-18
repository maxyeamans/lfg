const router = require("express").Router();
const groupRoutes = require("./group");
const userRoutes = require("./user");
const loginRoutes = require("./login");
const messageRoutes = require("./message");

// User routes
router.use("/users", userRoutes);
// Profile routes
router.use("/messages", messageRoutes);
// Group routes
router.use("/groups", groupRoutes);
// Login routes
router.use("/login", loginRoutes);

module.exports = router;
