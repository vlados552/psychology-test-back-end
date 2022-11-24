const express = require("express");
const router = express.Router();
const User = require("../models/user");

// GET '/' which will list out all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// GET '/:userId' which will list a specific user
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// POST '/' which will add a new user and return it
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

// PUT '/:userId' which will update a user and return it
router.put("/:userId", async (req, res, next) => {
  try {
    const user = User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });
    res.status(204).json(user);
  } catch (error) {
    next(error);
  }
});

// DELETE '/:userId' which will delete a user and return a list of all users
router.delete('/:userId', async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
})

module.exports = router;