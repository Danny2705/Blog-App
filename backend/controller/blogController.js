const blogModel = require("../model/blogModel");

const getAllBlog = async (req, res) => {
  try {
    const blog = await blogModel.find({}).sort({ createdAt: -1 });
    res.json(blog);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: eror });
  }
};

const createBlog = async (req, res) => {
  const { title, description, image } = req.body;

  try {
    const blog = await blogModel.create({ title, description, image });
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;

  try {
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(404).json({ error: "There is no such blog" });
    // }

    const blog = await blogModel.findByIdAndUpdate(id, {
      ...req.body,
      // title,
      // description,
      // image,
    });

    if (!blog) {
      res.status(404).json({ error: "There is no such blog" });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(404).json({ error: "There is no such blog" });
    // }

    const blog = await blogModel.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ error: "There is no such blog" });
    }
    res.status(200).send(blog);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllBlog, createBlog, updateBlog, deleteBlog };
