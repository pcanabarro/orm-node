// const database = require("../models/index.js")

// module.exports = class Enrollment {
//     static async getEnrollments(req, res) {
//         try {
//             const enrollments = await database.Enrollment.findAll()
//             return res.status(200).json({ data: enrollments })
//         } catch (err) {
//             return res.status(500).json({ data: err.message })
//         }
//     }

//     static async getEnrollment(req, res) {
//         const { id } = req.params
//         try {
//             const enrollment = await database.Enrollment.findOne({ where: { id: Number(id) } })
//             return res.status(200).json({ data: enrollment })
//         } catch (err) {
//             return res.status(500).json({ data: err.message })
//         }
//     }

//     static async createEnrollment(req, res) {
//         const info = req.body
//         try {
//             const newEnrollment = await database.Enrollment.create(info)
//             return res.status(201).json({ data: newEnrollment })
//         } catch (err) {
//             return res.status(500).json({ data: err.message })
//         }
//     }

//     static async updateEnrollment(req, res) {
//         const { id } = req.params
//         const info = req.body
//         try {
//             await database.Enrollment.update(info, { where: { id: Number(id) } })
//             const updatedEnrollment = await database.Enrollment.findOne({ where: { id: Number(id) } })
//             return res.status(200).json({ data: updatedEnrollment })
//         } catch (err) {
//             return res.status(500).json({ data: err.message })
//         }
//     }

//     static async deleteEnrollment(req, res) {
//         const { id } = req.params
//         try {
//             await database.Enrollment.destroy({ where: { id: Number(id) } })
//             return res.status(200).json({ data: "Enrollment Deleted!" })
//         } catch (err) {
//             return res.status(500).json({ data: err.message })
//         }
//     }
// }