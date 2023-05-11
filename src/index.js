require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(
  "mongodb+srv://alpha-admin:test1234@cluster1995.hcn4h.mongodb.net/blogDB",
  { useNewUrlParser: true }
);

const postsSchema = {
  title: String,
  role: String,
  salary: String,
  qualification: String,
  experience: String,
  responsibilities: String,
  skills: String,
  content: String,
};

const Post = mongoose.model("Post", postsSchema);

app.get("/jobs", function (req, res) {
  Post.find({})
    .then(function (posts) {
      res.render("jobs", { posts: posts });
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    role: req.body.role,
    location: req.body.location,
    qualification: req.body.qualification,
    experience: req.body.experience,
    responsibilities: req.body.responsibilities,
    skills: req.body.skills,
    content: req.body.postBody,
  });

  post
    .save()
    .then(() => {
      res.redirect("/jobs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;

  Post.findOne({ _id: requestedPostId }).then(function (post) {
    res.render("post", {
      title: post.title,
      role: post.role,
      location: post.location,
      salary: post.salary,
      qualification: post.qualification,
      experience: post.experience,
      responsibilities: post.responsibilities,
      skills: post.skills,
      content: post.content,
    });
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/courses", (req, res) => {
  res.render("courses");
});

app.get("/faculties", (req, res) => {
  res.render("faculties");
});

app.get("/students", (req, res) => {
  res.render("students");
});

app.get("/jobs", (req, res) => {
  res.render("jobs");
});

app.get("/faq", (req, res) => {
  res.render("faq");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

