import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1> <p>Phone: 09xx-xxx-xxx</p>");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});