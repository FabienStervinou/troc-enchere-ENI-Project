require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const cookieParser = require('cookie-parser');


var app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
// app.use(customAuthMiddleware);

const db = require("./models");
// db.sequelize.sync();
// DO "DROP TABLE IF EXIST" before
db.sequelize
  .sync({
    force: true,
  })
  .then(() => {
    console.log("Drop and re-sync db.");
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to TrocEnchère App",
  });
});

require("./routes/utilisateur.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});