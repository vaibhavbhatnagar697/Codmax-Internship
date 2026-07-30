import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message: "All blogs fetched successfully"
    });
});

router.post("/", (req, res) => {

    const blog = req.body;

    res.status(201).json({
        message: "Blog created successfully",
        data: blog
    });

});

export default router