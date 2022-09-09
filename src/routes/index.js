import bodyParser from "body-parser";
import express from "express";
import Person from "../controllers/PersonController";

const route = express.Router()

app.route('/')
    .get(Person.getPeople())

export default app