// model
const Todo = require("../models/todoModel");

// get single todo
const getSingleTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id }).select({ _id: 0 });
    res.json(todo);
  } catch (error) {
    console.error(error);
  }
};

// get all todo
const getAllTodo = async (req, res) => {
  const todoList = await Todo.find({ status: "active" })
    .limit(8)
    .select({ status: 0 });
  res.status(200).json(todoList);
};

// post single todo
const createSingleTodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    await newTodo.save();
    res.status(200).send(newTodo);
  } catch (error) {
    res.status(500).send({ msg: " failed to create todo!" });
  }
};

// post multiple todo
const createMultipleTodo = async (req, res) => {
  await Todo.insertMany(req.body)
    .then(() => res.status(200).send({ msg: "successfully inserted todo" }))
    .catch((error) => console.log(error));
};

// update single todo
const updateSingleTodo = async (req, res) => {
  await Todo.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: "inactive",
      },
    },
    { new: true }
  )
    .then((res) =>
      res.status(200).send({ msg: "successfully updated todo", res })
    )
    .catch((err) => console.log("Faild to update", err));
};

// update multiple  todo
const updateMultipleTodo = async (req, res) => {};

// delete single todo
const deleteSingleTodo = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(404).send({ msg: " failed to delete", err: error });
  }
};

module.exports = {
  getSingleTodo,
  getAllTodo,
  createSingleTodo,
  createMultipleTodo,
  updateSingleTodo,
  updateMultipleTodo,
  deleteSingleTodo,
};
