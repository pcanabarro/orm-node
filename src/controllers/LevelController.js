const { LevelsServices } = require("../services");
const levelsService = new LevelsServices();

module.exports = class Level {
    static async getLevels(req, res) {
        try {
            const levels = await levelsService.getAllRegisters()
            return res.status(200).json({ data: levels })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async getLevel(req, res) {
        const { id } = req.params
        try {
            const level = await levelsService.getOneRegister(Number(id))
            return res.status(200).json({ data: level })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async createLevel(req, res) {
        const info = req.body
        try {
            const newLevel = await levelsService.createRegister(info)
            return res.status(201).json({ data: newLevel })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async updateLevel(req, res) {
        const { id } = req.params
        const info = req.body
        try {
            await levelsService.updateRegister(info, Number(id))
            return res.status(200).json({ data: "Level Updated!" })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async deleteLevel(req, res) {
        const { id } = req.params
        try {
            await levelsService.deleteRegister(Number(id))
            return res.status(200).json({ data: "Level Deleted!" })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async restoreLevel(req, res) {
        const { id } = req.params
        try {
            await database.Level.restore({ where: { id: Number(id) } })
            return res.status(200).json({ data: "Level restored!", restoredLevel })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }
}