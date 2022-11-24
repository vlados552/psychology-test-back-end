const mongoose = require("mongoose");

const testResultSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    testResult: [
      {
        frontPositive: String,
        frontNegative: String,
        backPositive: String,
        backNegative: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const TestResult = mongoose.model("TestResult", testResultSchema);

module.exports = TestResult;
