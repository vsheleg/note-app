const express = require("express");
var cors = require("cors");
let notesRouter = require("./routes/note.router");
let userRouter = require("./routes/user.router");
const app = express();

app.use(cors());

app.get("/", function(req, res) {
  res.end("");
});
app.use("/user/", userRouter);
app.use("/notes/", notesRouter);

app.listen(3002);
