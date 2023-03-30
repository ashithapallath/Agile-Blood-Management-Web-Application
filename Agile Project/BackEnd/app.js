const express = require("express");
const app = express();

app.use(express.json());


//Routes import

const blood = require("./routes/Bloodroute");
const user = require("./routes/userroute")

app.use("/api/v1",blood);
app.use("/api/v1",user);



module.exports = app;