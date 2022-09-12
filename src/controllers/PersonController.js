const database = require("../models/index.js");

module.exports = class Person {
    static async getPeople(req, res) {
        try {
            const allPeople = await database.People.findAll()
            return res.status(200).json({ data: allPeople });
        } catch (err) {
            return res.status(500).json({ data: err.message});
        }
    }
}
