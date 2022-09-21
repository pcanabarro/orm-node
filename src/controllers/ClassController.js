const { ClassesServices } = require("../services")
const classesService = new ClassesServices()
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = class Classes {
    static async getClasses(req, res) {
        const { initial_date, final_date } = req.query
        const where = {}
        initial_date || final_date ? where.date = {} : null
        initial_date ? where.date[Op.gte] = initial_date : null
        final_date ? where.date[Op.lte] = final_date : null
        try {
            const allClasses = await classesService.getFilterRegisters(where)
            return res.status(200).json({ data: allClasses })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async getClass(req, res) {
        const { id } = req.params
        try {
            const oneClass = await classesService.getOneRegister(Number(id))
            return res.status(200).json({ data: oneClass })
        } catch (err) {
            res.status(500).json({ data: err.message })
        }
    }

    static async createClass(req, res) {
        const info = req.body
        try {
            const newClass = await classesService.createRegister(info)
            return res.status(201).json({ data: newClass })
        } catch (err) {
            res.status(500).json({ data: err.message })
        }
    }

    static async updateClass(req, res) {
        const { id } = req.params
        const info = req.body
        try {
            await classesService.updateRegister(info, Number(id))
            return res.status(200).json({ data: "Class Updated!" })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async deleteClass(req, res) {
        const { id } = req.params
        try {
            await classesService.deleteRegister(Number(id))
            return res.status(200).json({ data: "Class Deleted!" })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async restoreClass(req, res) {
        const { id } = req.params
        try {
            await database.Class.restore({ where: { id: Number(id) } })
            return res.status(200).json({ data: "Class restored!", restoredClass })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }
}