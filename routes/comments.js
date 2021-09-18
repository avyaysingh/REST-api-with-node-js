const express = require("express")
const router = express.Router();
const Comment = require("../models/comment");
const commentController = require('../controllers/commentController')

//adding comment to a post
router.post('/posts/:id/comment', commentController.createComment);

module.exports = router;