const {
  CreateTask,
  getTask,
  uTask,
  dTask,
} = require("../services/taskService");

module.exports = {
  postCreateTask: async (req, res) => {
    let result = await CreateTask(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  getAllTask: async (req, res) => {
    let result = await getTask(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  updateTask: async (req, res) => {
    let result = await uTask(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteTask: async (req, res) => {
    let result = await dTask(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
