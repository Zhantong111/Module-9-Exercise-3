"use strict";
const User = require("./user");

async function init() {
  await User.sync(); //sync the model
}

init();

module.exports = {
  User, //export the model
};
