const database = require("../models/index.js")

module.exports = class Classes {
    static async getClasses(req, res) {
        try {
            const allClasses = await database.Class.findAll()
            return res.status(200).json({ data: allClasses })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async getClass(req, res) {
        const { id } = req.params
        try {
            const oneClass = await database.Class.findOne({ where: { id: Number(id) } })
            return res.status(200).json({ data: oneClass })
        } catch (err) {
            res.status(500).json({ data: err.message })
        }
    }

    static async createClass(req, res) {
        const info = req.body
        try {
            const newClass = await database.Class.create(info)
            return res.status(201).json({ data: newClass })
        } catch (err) {
            res.status(500).json({ data: err.message })
        }
    }

    static async updateClass(req, res) {
        const { id } = req.params
        const info = req.body
        try {
            await database.Class.update(info, { where: { id: Number(id) } })
            const updatedClass = await database.Class.findOne({ where: { id: Number(id) } })
            return res.status(200).json({ data: updatedClass })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async deleteClass(req, res) {
        const { id } = req.params
        try {
            await database.Class.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ data: "Class Deleted!" })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }
}