import express from "express";
const router = express.Router();

const blogs = [];

router.get("/", (req, res) => {
    res.status(200).json(blogs);
});

router.post("/", (req, res) => {

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and Content are required"
        });
    }

    const newBlog = {
        id: blogs.length + 1,
        title,
        content
    };

    blogs.push(newBlog);

    res.status(201).json({
        message: "Blog created successfully",
        blog: newBlog
    });
});
export default router