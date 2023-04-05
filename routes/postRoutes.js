const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.postController.getPost(res);
});

router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updatePost(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deletePost(req, res);
});

module.exports = router;
