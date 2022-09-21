const Services = require("./Services.js");
const database = require("../models")

module.exports = class ClassesServices extends Services {
    constructor() {
        super('Class');
    }

    async getFilterRegisters(where) {
        return database[this.modelName].findAll({ where: { ...where } })
    }
}