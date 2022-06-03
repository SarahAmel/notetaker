const express = require ("express");



// todo  add the routes for the api/html

const apiRoutes = require("./routes/apiRoutes");

const htmlRoutes = require("./routes/htmlRoutes");

//initalize the app and create a port 
const app = express();

const PORT = process.env.PORT || 3001;

// to do set up  a body parsing static and route and middlewear 
app.use(express.urlencoded({ extend: true}));

app.use(express.json());

app.use(express.static("public"));

app.use("/",htmlRoutes);

app.use("/api",apiRoutes);


// start the server on the port 

app.listen(PORT,() => console.log(`This port is listening at ${PORT}`));


