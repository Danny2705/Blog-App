const express = require("express");
const blogController = require("../controller/blogController");

const router = express.Router();

router.get("/blog", blogController.getAllBlog);
router.post("/blog", blogController.createBlog);
router.put("/blog/:id", blogController.updateBlog);
router.delete("/blog/:id", blogController.deleteBlog);

module.exports = router;
