const router = require("express").Router();
const groupController = require("../../controllers/groupController");

// Matches with "/api/groups"
router.route("/")
  .get(groupController.findAll)
  .post(groupController.create);

// Matches with "/api/groups/:id"
router
  .route("/:id")
  .get(groupController.findById)
  .put(groupController.update)
  .delete(groupController.remove);

// Matches with "/api/groups/search"
router.route("/search")
  .post(groupController.findByData);

module.exports = router;
