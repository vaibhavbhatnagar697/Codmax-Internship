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
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const blog = blogs.find(
        blog => blog.id === id
    );

    if (!blog) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    blog.title = req.body.title;
    blog.content = req.body.content;

    res.json({
        message: "Blog updated successfully",
        blog
    });

})
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const blogIndex = blogs.findIndex(
        blog => blog.id === id
    );

    if (blogIndex === -1) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    blogs.splice(blogIndex, 1);

    res.json({
        message: "Blog deleted successfully"
    });

});
export default router