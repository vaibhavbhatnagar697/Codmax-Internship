import express from "express"
const app = express()
app.listen(3200, (req, res) => {
    console.log("Server  is running on Port 3200")
})
