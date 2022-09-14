const database = require("../models/index.js")

module.exports = class Level {
    static async getLevels(req, res) {
        try {
            const levels = await database.Level.findAll()
            return res.status(200).json({ data: levels })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async getLevel(req, res) {
        const { id } = req.params
        try {
            const level = await database.Level.findOne({ where: { id: Number(id) } })
            return res.status(200).json({ data: level })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async createLevel(req, res) {
        const info = req.body
        try {
            const newLevel = await database.Level.create(info)
            return res.status(201).json({ data: newLevel })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async updateLevel(req, res) {
        const { id } = req.params
        const info = req.body
        try {
            await database.Level.update(info, { where: { id: Number(id) } })
            const updatedLevel = await database.Level.findOne({ where: { id: Number(id) } })
            return res.status(200).json({ data: updatedLevel })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async deleteLevel(req, res) {
        const { id } = req.params
        try {
            await database.Level.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ data: "Level Deleted!" })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }
}