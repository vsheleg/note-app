const express = require("express");
const cors = require("cors");
const notesRouter = require("./routes/note.router");
const userRouter = require("./routes/user.router");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());

app.get("/", function(req, res) {
  res.end("");
});
app.use("/user/", userRouter);
app.use("/notes/", notesRouter);

app.listen(3002);
