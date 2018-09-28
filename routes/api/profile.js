const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// Matches with "/api/books"
router.route("/")
  .get(profileController.findAll)
  .post(profileController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(profileController.findById)
  .put(profileController.update)
  .delete(profileController.remove);

module.exports = router;
