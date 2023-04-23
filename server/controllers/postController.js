const Post = require("../models/postModel");
const { QueryTypes, Sequelize } = require("sequelize");
const instance = require("../models");

/*THE FOLLOWING ARE THE CODE TO EXECUTE DB QUERIES ON THE DIFFERENT USER CREATED TASKS*/

exports.createPost = async (req, res) => {
  console.log("Creating Post");

  let ret = await instance.Post.create({
    title: req.body.title,
    content: req.body.content,
    datePosted: req.body.datePosted,
    postedBy: req.body.postedBy,
    description: req.body.description,
    tags: req.body.tags,
    coverURL: req.body.coverURL,
  });
  console.log(req.body);

  res.status(201).send(ret);
};

exports.displayPosts = async (req, res) => {
  console.log("Displaying All Posts");

  let ret = await instance.Post.findAll();
  console.log(ret);
  res.status(201).send(ret);
};

// exports.displayTask = async (req, res) => {
//   console.log("Displaying Task");

//   let ret = await instance.Task.findOne({
//     where: { id: req.params.id },
//   });

//   console.log(ret);
//   res.status(201).send(ret);
// };

// exports.deleteTask = async (req, res) => {
//   console.log("Deleting Tasks");

//   let row = await instance.Task.findOne({
//     where: { id: req.params.id },
//   });

//   let ret = await instance.Task.destroy({
//     where: { id: req.params.id },
//     truncate: true,
//   });

//   console.log(ret);
//   res.status(200).json({
//     status: "success",
//     data: null,
//   });
// };

// exports.deleteAllTasks = async (req, res) => {
//   console.log("Deleting All Tasks");

//   let ret = await instance.Task.destroy({
//     where: {},
//     truncate: true,
//   });

//   console.log(ret);
//   res.status(200).json({
//     status: "success",
//     data: null,
//   });
// };
