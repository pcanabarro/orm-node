const database = require("../models/index.js");

module.exports = class Person {
    static async getActivePeople(req, res) {
        try {
            const activePeople = await database.Person.findAll()
            return res.status(200).json({ data: activePeople });

        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async getPeople(req, res) {
        try {
            const allPeople = await database.Person.scope('all').findAll()
            return res.status(200).json({ data: allPeople });

        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async getPerson(req, res) {
        const { id } = req.params
        try {
            const person = await database.Person.findOne({ where: { id: Number(id) } })
            return res.status(200).json({ data: person })

        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async createPerson(req, res) {
        const person = req.body
        try {
            const newPerson = await database.Person.create(person)
            return res.status(201).json({ data: newPerson })

        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async updatePerson(req, res) {
        const { id } = req.params //same thing as req.params.id
        const info = req.body
        try {
            await database.Person.update(info, { where: { id: Number(id) } })
            const updatedPerson = await database.Person.findOne({ where: { id: Number(id) } })
            return res.status(200).json({ data: updatedPerson })

        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async deletePerson(req, res) {
        const { id } = req.params
        try {
            await database.Person.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ data: "Person deleted!" })

        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async restorePerson(req, res) {
        const { id } = req.params
        try {
            await database.Person.restore({ where: { id: Number(id) } })
            return res.status(200).json({ data: "Person restored!", restoredPerson })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    ///person/1/enrollment/5
    static async getEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            const enrollment = await database.Enrollment.findOne({
                where: {
                    id: Number(enrollmentId),
                    student_id: Number(studentId) //the key need to be equal to column
                }
            })
            return res.status(200).json({ data: enrollment })

        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async createEnrollment(req, res) {
        const { studentId } = req.params
        const info = { ...req.body, student_id: Number(studentId) }
        try {
            const newEnrollment = await database.Enrollment.create(info)
            return res.status(201).json({ data: newEnrollment })

        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async updateEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        const info = req.body
        try {
            await database.Enrollment.update(info, {
                where: {
                    id: Number(enrollmentId),
                    student_id: Number(studentId)
                }
            })
            const updatedEnrollment = await database.Enrollment.findOne({
                where: { id: Number(enrollmentId) }
            })
            return res.status(200).json({ data: updatedEnrollment })

        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async deleteEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            const enrollment = await database.Enrollment.destroy({ where: { id: Number(enrollmentId) } })
            return res.status(200).json({ data: "Enrollment Deleted!" })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async restoreEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            await database.Enrollment.restore({
                where: {
                    id: Number(enrollmentId),
                    student_id: Number(studentId)
                }
            })
            return res.status(200).json({ data: "Enrollment restored!", restoredEnrollment })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }
}
