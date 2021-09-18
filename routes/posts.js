const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");


// get all posts
router.get("/posts", postController.post_index);

//get post based on id
router.get("/posts/:id", postController.post_details);

// add a post
router.post("/posts/create", postController.createPost);

// updating post
router.put("/posts/update/:id", postController.updatePost);

// deleting post 
router.delete("/posts/delete/:id", postController.deletePost);




module.exports = router;

