require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var customersRouter = require("./routes/customers");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// const http = require('http');

// const hostname = "127.0.0.1";
const port = 3003;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// connect to database
let dbOption = {
  useNewUrlParser: true,
  autoIndex: false,
};
if (process.env.PRODUCTION) {
  dbOption.user = process.env.DATABASE_USER;
  dbOption.pass = process.env.DATABASE_PASS;
}
mongoose.connect(
  process.env.DATABASE,
  {
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASS,
    useNewUrlParser: true,
    autoIndex: false,
  },
  function (err) {
    if (err) console.log(err);
    if (!err) console.log("Success connected");
  }
);
mongoose.set("debug", true);

app.use("/", indexRouter);
app.use("/customers", customersRouter);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
