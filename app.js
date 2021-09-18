const express = require("express");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");

const app = express();
app.use(express.json());

// blog routes 
app.use(postRoute);

// comments routes
app.use(commentRoute)



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on Port ${PORT}`));





/*                                      old                            */

// const exphbs = require("express-handlebars");
// const bodyParser = require("body-parser");

/*
const db = require("./config/database");

const Author = require("./models/author");
const Post = require("./models/Post");
const Comment = require("./models/comment");
const path = require("path");



Author.hasMany(Post);
Post.hasMany(Comment);

db.sync();

*/

/* //sequelize sync 

// db.sync({ force: true })
//   .then((result) => {
//     return Author.create({
//       author_name: "Avyay Singh",
//       author_email: "avyaysingh05@gmail.com",
//     });
//     // console.log(result);
//   })
//   .then((author) => {
//     console.log("First author created : ", author);
//     return author.createPost({
//       catagory: "cinema",
//       title: "The Cinematic worke of Andre Trakavoskey",
//       description:
//         "The most famous Soviet film-maker since Sergei M. Eisenstein, Andrei Tarkovsky (the son of noted poet Arseniy Tarkovsky) studied music and Arabic in Moscow before enrolling in the Soviet film school VGIK. He shot to international attention with his first feature, Ivan's Childhood (1962), which won the top prize at the Venice Film Festival.",
//     });
//     // return Post.create({
//     //   catagory: "cinema",
//     //   title: "The Cinematic worke of Andre Trakavoskey",
//     //   description:
//     //     "The most famous Soviet film-maker since Sergei M. Eisenstein, Andrei Tarkovsky (the son of noted poet Arseniy Tarkovsky) studied music and Arabic in Moscow before enrolling in the Soviet film school VGIK. He shot to international attention with his first feature, Ivan's Childhood (1962), which won the top prize at the Venice Film Festival.",
//     // });
//   })
//   .then((post) => {
//     console.log("First Post added", post);
//     return post.createComment({
//       name: "Shubham Singh",
//       body: "this is my first comment of Andre's filmography",
//     });
//     // return Comment.create({
//     //   name: "Shubham Singh",
//     //   body: "this is my first comment of andre's filmography",
//     // });
//   })
//   .then((comment) => {
//     console.log("First comment added", comment);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// TEST DB
// db.authenticate()
//   .then(() => console.log('Database Connected...'))
//   .catch(err => console.log(err));

// const app = express();
// // db.sync({force: true});

// Handlebars
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Body parser
// app.use(bodyParser.urlencoded({extended: false}));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Index router
// not correct just same as posts i.e directing to same route
app.get("/", require("./routes/posts"));

// Posts routes
app.use("/posts", require("./routes/posts"));

//Comments routes
app.use("/comments", require("./routes/comments"));

//defining one to many relatioship between post and multiple comments
// Post.hasMany(Comment);
// Comment.belongsTo(Post);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on Port ${PORT}`));


*/