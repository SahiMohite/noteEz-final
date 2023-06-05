const express = require("express");
const path = require('path')
const app = express();
// const multer = require('multer')
app.set("view engine", "ejs");

app.use('/static', express.static("public"));
const port = 5000
app.get("/", (req, res) => {
    res.render("output.ejs");
});


app.get("/download-file1", (req, res) => {
    res.download("./public/docs/sample.pdf");
})

app.get("/download-file2", (req, res) => {
    res.download("./public/docs/sample2.pdf");
})


app.use(express.static(path.join(__dirname, 'views')));

app.listen(port, () => {
    console.log(`Server started on PORT ${port}`)
});
