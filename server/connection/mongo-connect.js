const mongoose = require("mongoose");

module.exports = async function (url) {
  try {
    await mongoose.connect(url).then(() => {
      console.log("MongoDb Connect Successfully!");
    });
  } catch (error) {
    console.log("MongoDb connnection Error:", error);
  }
};
