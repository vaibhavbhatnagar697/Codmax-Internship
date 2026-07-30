// const express = require("express");
// const blogRoutes = require("./routes/blogRoutes");
import express from "express";
import blogRoutes from "./Routes/BlogRoutes.js"
const app = express();

app.use(express.json());

app.use("/blogs", blogRoutes);

app.listen(3200, () => {
    console.log("Server running on port 3200");
});