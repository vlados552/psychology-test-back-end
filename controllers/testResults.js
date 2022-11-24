const express = require("express");
const router = express.Router();
const TestResult = require("../models/testResult");

// GET '/' which will list out all test results
router.get("/", async (req, res, next) => {
  try {
    const testResults = await TestResult.find();
    res.status(200).json(testResults);
  } catch (error) {
    next(error);
  }
});

// GET '/:testResultId' which will list a specific test result
router.get("/:testResultId", async (req, res, next) => {
  try {
    const testResults = await TestResult.findById(req.params.testResultId);
    res.status(200).json(testResults);
  } catch (error) {
    next(error);
  }
});

// POST '/' which will add a new test result and return it
router.post("/", async (req, res, next) => {
  try {
    const testResult = await TestResult.create({
        frontPositive: req.body.frontPositive,
        frontNegative: req.body.frontNegative,
        backPositive: req.body.backPositive,
        backNegative: req.body.backNegative,
    });
    res.status(201).json(testResult);
  } catch (error) {
    next(error);
  }
});

// PUT '/:testResultId' which will update a test result and return it
router.put("/:testResultId", async (req, res, next) => {
  try {
    const testResult = TestResult.findByIdAndUpdate(req.params.testResultId, req.body, {
      new: true,
    });
    res.status(204).json(testResult);
  } catch (error) {
    next(error);
  }
});

// DELETE '/:testResultId' which will delete a test result and return a list of all test results
router.delete('/:testResultId', async (req, res, next) => {
  try {
    await TestResult.findByIdAndDelete(req.params.testResultId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
})

module.exports = router;