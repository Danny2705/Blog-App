const express = require("express");
const moongoose = require("mongoose");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

//express app
const app = express();

const PORT = process.env.PORT || 5001;

moongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api", blogRoutes);
app.use("/api", userRoutes);

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

//listen to requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
