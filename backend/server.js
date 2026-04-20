// Creating the Express App.

// Importing the Express module.
const express = require('express'); 

// Creating the Express App.    
const app = express();

// Running the Express App. --> we will listen for requests.
app.listen(4000, () => {
    console.log('Listening on port 4100');
});