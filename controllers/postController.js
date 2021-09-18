const Post = require("../models/Post");
const Author = require("../models/author");
const Comment = require("../models/comment");

// MDN naming conventions    :   post_index, post_details, post_create_get, post_create_post, post_delete

Author.hasMany(Post, { foreignKey: "authorId" });
Post.belongsTo(Author, { foreignKey: "authorId" });
Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });


const post_index = async(req, res) => {
  await Post.findAll({ include: [Author, Comment] })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => console.log(err));
};

const post_details = async(req, res) => {
  await Post.findByPk(req.params.id, {
    include: Comment,
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => console.log(err));
};

const createPost = async(req, res) => {
  let { catagory, title, description, authorId } = req.body;
  // const author = Author.findOne({ where: { id: authorPkId } });
  await Post.create({
    catagory,
    title,
    description,
    authorId,
  })
    .then((result) => {
      res.status(200).json({
        message: "Upload Successfully a POst with id = " + result.id,
        post: result,
      });
    })
    .catch((err) => console.log(err));
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  let { catagory, title, description } = req.body;
  try {
    const post = await Post.findOne({ where: { id } });
    post.catagory = catagory;
    post.title = title;
    post.description = description;

    await post.save();

    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const deletePost = async(req, res) => {
  const id = req.params.id;
  const post = await Post.findOne({ where: { id } });
  await post.destroy()
    .then((result) => {
      res.status(200).json({
        message: "deleted Successfully a POst with id = " + result.id,
        post: result,
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  post_index,
  post_details,
  createPost,
  updatePost,
  deletePost,
};
