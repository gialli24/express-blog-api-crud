const express = require('express');
const app = express();
const port = 3000;

/* Body Parser */
app.use(express.json());

const postsRouter = require("./routers/posts");

app.use("/posts", postsRouter);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});