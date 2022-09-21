const { PeopleServices } = require("../services");
const peopleServices = new PeopleServices();

module.exports = class Person {
    static async getActivePeople(req, res) {
        try {
            const activePeople = await peopleServices.getActiveRegisters() //calling the service referring to Person database and the respective method (getAll)
            return res.status(200).json({ data: activePeople });

        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async getPeople(req, res) {
        try {
            const allPeople = await peopleServices.getAllRegisters()
            return res.status(200).json({ data: allPeople });

        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async getPerson(req, res) {
        const { id } = req.params
        try {
            const person = await peopleServices.getOneRegister(Number(id))
            return res.status(200).json({ data: person })

        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async createPerson(req, res) {
        const person = req.body
        try {
            const newPerson = await peopleServices.createRegister(person)
            return res.status(201).json({ data: newPerson })

        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async updatePerson(req, res) {
        const { id } = req.params //same thing as req.params.id
        const info = req.body
        try {
            await peopleServices.updateRegister(info, Number(id))
            return res.status(200).json({ data: "Person Updated" })

        } catch (err) {
            return res.status(500).json({ data: err.message });
        }
    }

    static async deletePerson(req, res) {
        const { id } = req.params
        try {
            await peopleServices.deleteRegister(Number(id))
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

    static async deleteEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            const enrollment = await database.Enrollment.destroy({ where: { id: Number(enrollmentId) } })
            return res.status(200).json({ data: "Enrollment Deleted!" })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async getEnrollments(req, res) {
        const { studentId } = req.params
        try {
            const person = await database.Person.findOne({ where: { id: Number(studentId) } })
            const allEnrollments = await person.getPeopleEnrolled()
            return res.status(200).json({ data: allEnrollments })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async getEnrollmentByClass(req, res) {
        const { classId } = req.params
        try {
            const enrollments = await database.Enrollment.findAndCountAll({
                where: {
                    class_id: Number(classId),
                    status: "confirmed"
                }
            })
            return res.status(200).json({ data: enrollments })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async getFullClasses(req, res) {
        const studentLimit = 2;
        try {
            const fullClasses = await database.Enrollment.findAndCountAll({
                where: {
                    status: "confirmed"
                },
                attributes: ['class_id'],
                group: ['class_id'],
                having: Sequelize.literal(`count(class_id) >= ${studentLimit}`)
            })
            return res.status(200).json({ data: fullClasses.count })
        } catch (err) {
            return res.status(500).json({ data: err.message })
        }
    }

    static async cancelPerson(req, res) {
        const { studentId } = req.params
        try {
            await peopleServices.cancelPersonAndEnrollement(Number(studentId))
            return res.status(200).json({ data: "Enrollment Canceled!" })

        } catch (err) {
            return res.status(200).json({ data: err.message })
        }
    }
}