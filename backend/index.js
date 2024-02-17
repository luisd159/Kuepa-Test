const express = require("express");
const cors = require("cors");
const { connect } = require("./db_connection/config");
require("dotenv").config();
const userRoutes = require("./user/user.routes");


const app = express();

connect();
app.listen(process.env.PORT, ()=>{
    console.log("App Listened at", process.env.PORT);
});

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/users", userRoutes);

// Endpoint for 404
app.use((req, res) => {
  res.status(404).json({ message: "Not found." });
});
