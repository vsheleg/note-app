const express = require("express");
var cors = require("cors");
let notesRouter = require("./routes/index");

const app = express();
app.use(cors());
app.use("/notes/", notesRouter);
app.listen(3002);
