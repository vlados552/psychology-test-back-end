//================================================
// Basic Config
//================================================
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

//================================================
// Middleware
//================================================
// enable CORS to allow requests from clients of other origins
app.use(cors());
// 'express.json' parses application/json request data and
// adds it to the request object as request.body
app.use(express.json());
// 'express.urlencoded' parses x-ww-form-urlencoded request data and
// adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));

//================================================
// Routes
//================================================
// User routes
const usersController = require('./controllers/users');
app.use('/users', usersController);
// Test result routes
const testResultsController = require('./controllers/testResults');
app.use('/testResults', testResultsController);
//================================================
// Start Server
//================================================
app.listen(PORT, () => {
  console.log("API is listening on port: " + PORT);
});
