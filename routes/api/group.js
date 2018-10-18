const router = require("express").Router();
const groupController = require("../../controllers/groupController");

// Matches with "/api/groups"
router
  .route("/")
  .get(groupController.findAll)
  .post(groupController.create);

// Matches with "/api/groups/:id"
router
  .route("/:id")
  .get(groupController.findById)
  .put(groupController.update)
  .delete(groupController.remove);

// Matches with "/api/groups/join/:id"
router.route("/join/:id").put(groupController.join);

// Matches with "/api/groups/search"
router.route("/search").post(groupController.findByData);

// Matches with "/api/groups/new"
router.route("/new/groups").get(groupController.findNew);

module.exports = router;
