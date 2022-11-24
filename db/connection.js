//================================================
// Mongo Atlas Connection
//================================================
require('dotenv').config();
const mongoose = require('mongoose');

// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) =>
	console.log(err.message + ' You have failed the monGODb.')
);
db.on('connected', () => console.log('This connection pleases the monGODb.'));
db.on('disconnected', () => console.log('The monGODb has abandoned you.'));

// Open the Connection
db.on('open', () => {
	console.log('✅ Glory to the monGODb!');
});

module.exports = mongoose;