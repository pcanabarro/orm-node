import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send({data: "Hello World!"})
})

const PORT = 3000

app.listen(PORT, () => console.log(`Server listenning on ${PORT}`))