const userModel = require("../models/user.model");

const homeController = async (req, res) => {
  try {
    const data = await userModel({
      name: "zeeshan khan",
      email: "zk3762100@gmail.com",
      subject: "123465",
      message: "hy .....",
    });
    if (data) {
       await data.save();
      console.log("user save");
    }
    res.render("index");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports =  homeController ;
