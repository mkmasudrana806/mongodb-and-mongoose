const express = require("express");
const router = express.Router();

// controller for routes
const {
  getAllTodo,
  getSingleTodo,
  createSingleTodo,
  updateMultipleTodo,
  updateSingleTodo,
  deleteSingleTodo,
  createMultipleTodo,
} = require("../controllers/todoController");

// GET SINGLE TODO
router.get("/:id", getSingleTodo);

// GET ALL TODOS LIST
router.get("/", getAllTodo);

// POST A SINGLE TODO
router.post("/", createSingleTodo);

// POST MULTIPLE TODO
router.post("/all", createMultipleTodo);

// POST MULTIPLE TODO
router.post("/all", updateMultipleTodo);

// PUT  A SINGLE TODO
router.put("/:id", updateSingleTodo);

// DELETE A SINGLE TODO
router.delete("/:id", deleteSingleTodo);

module.exports = router;
