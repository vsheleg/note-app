const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  notesRouter = require("./routes/note.router"),
  userRouter = require("./routes/user.router"),
  jwt = require("jsonwebtoken");
model = require("./db/index");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.end("");
});

app.use("/notes", async function(req, res, next) {
  const decoded = jwt.decode(req.headers.authorization);
  const user = await model.User.findOne({
    where: { email: decoded.data.email }
  });
  if (!user) {
    res.forbidden();
  }
  next();
});

app.use("/user/", userRouter);
app.use("/notes/", notesRouter);

app.listen(3002);
