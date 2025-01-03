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

app.use (express.static(path.join(__dirname, './my-portfolio/build')));

//routes
app.use('/api/v1/portfolio',require('./routes/portfolioRoutes'));
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'./my-portfolio/build/index.html'))
});

//ports
const PORT = process.env.PORT || 10000;
const HOST = '0.0.0.0';


//listen
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});