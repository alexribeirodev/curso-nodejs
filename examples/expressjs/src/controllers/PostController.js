const Post = require("../model/Post");

module.exports = {
  store: async (req, res) => {
    const { title, body, tags, author_id } = req.body;

    const post = await Post.create({
      title,
      body,
      tags: tags || [],
      author: author_id
    });

    return res.json(post);
  },
  index: async (req, res) => {
    const { tag } = req.query;

    const post = await Post.find({ tags: tag });

    res.json(post);
  },
  show: async (req, res) => {
    const { id } = req.params;

    const post = await Post.findById(id);

    post.populate("author").execPopulate();

    res.json(post);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;

    let data = {};

    if (title) data.title = name;
    if (body) data.body = body;

    const post = await Post.findByIdAndUpdate(id, data);

    res.json(post);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete(id);

    res.json(post);
  }
};
