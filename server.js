import express from "express"

const app = express()

const port = 3000

app.get("/", (req, res) => {
    res.send("u are in the server")
})

app.listen(port, () => {
    console.log("Your server is online")
})