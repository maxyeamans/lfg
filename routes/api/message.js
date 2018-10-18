const router = require("express").Router();
const messageController = require("../../controllers/messageController");

// Matches with "/api/profile"
router.route("/")
  .get(messageController.findAll)
  .post(messageController.create);

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(messageController.findById)
  .put(messageController.update)
  .delete(messageController.remove);

module.exports = router;
