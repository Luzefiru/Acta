const Post = require("../../server/models/postModel");
const { QueryTypes, Sequelize } = require("sequelize");
const instance = require("../../server/models");

/**
 * A module containing the function to handle the creation of posts.
 */

const fetchPosts = async (req, res) => {
  /**
   * @param {req} an object containing all the information about the HTTP request
   * @returns an array of Post objects to be returned by the sequelize query
   */

  let ret = await instance.Post.findAll();

  return ret;
};

export default fetchPosts;
