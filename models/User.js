const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    require: true,
  },
  password: {
    type: DataTypes.STRING,
    require: true,
  },
  eAdmin: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
});

module.exports = User;
