const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// changes made on : 01:09:2021::22:02


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




/*                                         prev                         */

/*

// GET Post list
// router.get("/", (req, res) =>
//   Post.findAll()
//     .then((posts) =>
//       res.render("posts", {
//         posts,
//       })
//     )
//     .catch((err) => console.log(err))
// );


//Display add post form
router.get("/add", (req, res) => res.render("add"));

//Add a post
router.post("/add", (req, res) => {
  let {
    title,
    catagory,
    description,
    tag,
    view_count,
    post_image,
    random_images,
  } = req.body;
  let errors = [];

  // Validate fields
  if (!title) {
    errors.push({ text: "Please add a title" });
  }
  if (!description) {
    errors.push({ text: "Please add a description" });
  }
  if (!catagory) {
    errors.push({ text: "Please add a catagory" });
  }
  if (!tag) {
    errors.push({ text: "Please add a tag" });
  }

  // Check for errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
      title,
      catagory,
      description,
      view_count,
      tag,
    });
  } 
  else {
    if (!view_count) {
      view_count = 1;
    } //else add the view icon with number of view ..not implemented here 'll implement here.

    // Make Uppercase and replace comma ans space with pipe operator
    catagory = catagory.toLowerCase().replace(/, /g, " | ");
    //Insert into tablee
    Post.create({
      title,
      catagory,
      description,
      tag,
      view_count,
      post_image,
      random_images,
    })
      .then((post) => res.redirect("/posts"))
      .catch((err) => console.log(err));
  }
});

module.exports = router;

*/
