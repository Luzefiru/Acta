const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

// router.route("/deleteall").delete(postController.deleteAllTasks);

router
  .route("/")
  .post(postController.createPost)
  .get(postController.displayPosts);

module.exports = router;
