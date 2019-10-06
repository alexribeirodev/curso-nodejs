const User = require("../model/User");

module.exports = {
  store: async (req, res) => {
    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email
      });
    }

    return res.json(user);
  },
  index: async (req, res) => {
    const { email } = req.query;

    const user = await User.find({ email });

    res.json(user);
  },
  show: async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    res.json(user);
  }
};
