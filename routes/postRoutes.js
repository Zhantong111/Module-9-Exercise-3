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
  Controllers.postController.updatePost(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

router.put("/addLikes", (req, res) => {
  Controllers.postController.addLikes(req.body, res);
});

module.exports = router;
