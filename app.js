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

