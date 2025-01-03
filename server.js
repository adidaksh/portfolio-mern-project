const express = require("express");
const cors= require("cors");
const dotenv = require("dotenv");
const path = require('path')


//dotenv confrigration
dotenv.config()

//rest objects
const app = express();

//middelware
app.use(cors());
app.use(express.json());

//static file

app.use (express.static(path.join(__dirname, ./my-portfolio/build')));

//routes
app.use('/api/v1/portfolio',require('./routes/portfolioRoutes'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, ./my-portfolio/build/index.html))
});







//ports
const port = process.env.PORT || 3000;



//listen
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});
