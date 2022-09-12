const database = require("../models/index.js");

module.exports = class Person {
    static async getPeople(req, res) {
        try {
            const allPeople = await database.People.findAll()
            return res.status(200).json({ data: allPeople });
        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async getPerson(req, res) {
        const { id } = req.params
        try {
            const person = await database.People.findOne({ where: { id: Number(id) } })
            return res.status(200).json({ data: person })
        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async createPerson(req, res) {
        const person = req.body
        try {
            const newPerson = await database.People.create(person)
            return res.status(201).json({ data: newPerson })
        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async updatePerson(req, res) {
        const { id } = req.params //same thing as req.params.id
        const dataUpdate = req.body
        try {
            await database.People.update(dataUpdate, { where: { id: Number(id) } })
            const updatedPerson = await database.People.findOne({ where: { id: Number(id) } })
            return res.status(200).json({ data: updatedPerson })
        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async deletePerson(req, res) {
        const { id } = req.params
        try {
            await database.People.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ data: "Person deleted!" })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }
}
