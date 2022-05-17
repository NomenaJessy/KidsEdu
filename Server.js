const express = require("express");
const app = express();
const cors = require("cors");
require("./Mongo");
const utilisateurRoute = require("./route/utilisateur");
const activiteRoute = require('./route/activite');
const coursRoute = require('./route/cours');

app.use(express.json());
app.use(cors());

app.use(utilisateurRoute);
app.use(activiteRoute);
app.use(coursRoute);


const port = process.env.PORT || 3600;
app.listen(port, function(){
    console.log("Server is running on port "+port);
});