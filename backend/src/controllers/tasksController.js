const taskModel = require("../models/taskModel");

const getAll = async (_request, response) => {
    const tasks = await tasksModel.getAll;
    return response.status(200).json(tasks);
};

module.exports = {
    getAll,
};
