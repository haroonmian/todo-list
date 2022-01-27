const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");

//socket.io setup

const cookieParser = require("cookie-parser");

//getting mongodb connection
require("./config/db");
//getting route files

// const auth = require("./routes/auth");


//error handler middleware
//if i have to use it i have to set it after the routes ok.
const errorHandler = require("./middleware/error");

const cors = require("cors");
//setting static folder so that the files can access in browser
app.use(express.static(path.join(__dirname, "public")));
//using body parser
app.use(express.json());
app.use(cors());

//cookie parser
app.use(cookieParser());
//connecting to db
// connectDB();
const PORT = process.env.PORT || 5000;
app.use(morgan("dev"));
//use file upload

//setting static folder

//Mount Routres
app.use("/api/todos", require('./routes/todo'));
// app.use("/api/v1/auth", auth);
const db=require('./models');


app.use(errorHandler);

const serverRun = app.listen(PORT, () => {
  console.log(`server running in on port ${PORT}`);
});
//handling unhandled promise rejection rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //closing the server & exit process
  //passing 1 mean we r closing it with some error
  serverRun.close(() => process.exit(1));
});
