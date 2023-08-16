const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const token = jwt.sign({ id: _id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  return token;
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.login(email, password);
    //create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await userModel.signup(username, email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.find({});
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndUpdate(id, { ...req.body });

    if (!user) {
      res.status(404).json({ error: "There is no such user" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ error: "There is no such user" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  loginUser,
  signupUser,
  getUser,
  updateUser,
  deleteUser,
};
