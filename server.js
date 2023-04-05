const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

app.use(express.json());

let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

let postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

let commentRoutes = require("./routes/commentRoutes");
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my SQL application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on
port ${PORT}.`);
});
