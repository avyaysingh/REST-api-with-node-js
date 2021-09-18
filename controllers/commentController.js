const Post = require("../models/Post");
const Comment = require("../models/comment");

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

const createComment = (req, res) => {
  let { name, body, postId } = req.body;
  Comment.create({name, body, postId})
    .then((result) => {
      res.status(200).json({
        message: `Comment added for post : ${postId}`,
        post: result,
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createComment,
};
