const database = require("../models/index.js");

module.exports = class Services {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async getAllRegisters(where = {}) {
        return await database[this.modelName].findAll({ where: { ...where } })
    }

    async getOneRegister(id) {
        return await database[this.modelName].findOne({ where: { id: id } })
    }

    async createRegister(data) {
        return await database[this.modelName].create(data)
    }

    async updateRegister(data, id, transaction = {}) {
        return await database[this.modelName].update(data, { where: { id: id } }, transaction)
    }

    async updateRegisters(data, where, transaction = {}) {
        return await database[this.modelName].update(data, { where: { ...where } }, transaction)
    }

    async deleteRegister(id) {
        return await database[this.modelName].destroy(id)
    }
}