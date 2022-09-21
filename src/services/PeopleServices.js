const Services = require("./Services.js");
const database = require("../models/index.js")

module.exports = class PeopleServices extends Services {
    constructor() {
        super('Person');
        this.enrollments = new Services('Enrollment')
    }

    async getActiveRegisters(where = {}) {
        return database[this.modelName].findAll({ wher: { ...where } })
    }

    async getAllRegisters(where = {}) {
        return database[this.modelName].scope("all").findAll({ where: { ...where } })
    }

    async cancelPersonAndEnrollement(studentId) {
        return database.sequelize.transaction(async transaction => { //sequelize.transaction() helps you when the code don't works, it will rollback
            await super.updateRegister({ active: false }, studentId, { transaction: transaction })
            await this.enrollments.updateRegisters({ status: "canceled" }, { student_id: studentId }, { transaction: transaction })
        })
    }
}