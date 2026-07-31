import express from "express"
import blogs from "../Data/blogData.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.json(blogs);
});

router.post("/", (req, res) => {

    const { title, content } = req.body;

    const newBlog = {
        id: blogs.length + 1,
        title,
        content
    };

    blogs.push(newBlog);

    res.status(201).json(newBlog);
});
export default router