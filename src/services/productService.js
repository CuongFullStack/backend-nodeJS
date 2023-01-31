const Project = require("../models/project");
const aqp = require("api-query-params");

module.exports = {
  createProject: async (data) => {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
      return result;
    }
    if (data.type === "ADD-USERS") {
      let myProject = await Project.findById(data.projectId).exec();
      // myProject.usersInfor.push(...data.usersArr);
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.push(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }
    return null;
  },

  getProject: async (queryString) => {
    const page = queryString.page;

    const { filter, limit, population } = aqp(queryString);

    console.log("aqp(queryString) :", aqp(queryString));
    console.log("before", filter, limit, population);

    delete filter.page;

    console.log("after", filter, limit, population);

    let offset = (page - 1) * limit;

    let result = await Project.find(filter)
      .populate(filter.population)
      .skip(offset)
      .limit(limit)
      .exec();
    return result;
  },
};
