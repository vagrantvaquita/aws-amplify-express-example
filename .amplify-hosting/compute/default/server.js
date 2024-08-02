import express from 'express';

const app = express()
const port = 3000

app.get("/", (req, res) => {
    console.log(req)
    res.send("Hello World!")
})

app.get('/about', (req, res) => {
    res.send("This is not your about page!")
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})