// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// middleware
app.use(express.json());

// routes handler
const todoRoutes = require("./routes handler/todoRoutes");

// application routes middleware
app.use("/todo", todoRoutes);

// database connection using mongoose
// connection string for localhost: mongodb://localhost/todos
mongoose
  .connect("mongodb://localhost/todos")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(" failed to connect to MongoDB: ", err));


// custom error handling
app.use((err, req, res, next) => {
  console.log(
    "after calling next inside any catch block i have got below message"
  );
  res.send(err);
});

// start the server
app.listen(5000, () => console.log("listening on port 5000"));
