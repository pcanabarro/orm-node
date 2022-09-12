const express = require("express");
const routes = require("./routes/index.js")

const app = express();

const PORT = 3000;

routes(app);

app.listen(PORT, () => console.log(`Server listenning on ${PORT}`))

module.exports = app