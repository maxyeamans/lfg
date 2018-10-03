const router = require("express").Router();
const groupRoutes = require("./group");
const userRoutes = require("./user");
// const profileRoutes = require("./profile");

// User routes
router.use("/users", userRoutes);
// Profile routes
// router.use("/profiles", profileRoutes);
// Group routes
router.use("/groups", groupRoutes);

module.exports = router;
