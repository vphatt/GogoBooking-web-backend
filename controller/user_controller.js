const userModel = require("../model/user_model");

const register = async (req, res) => {
  //res.send("Hello");
  try {
    const userPhoneNumber = req.body.phoneNumber;
    const user = new userModel({
      phoneNumber: userPhoneNumber,
      dateCreate: Date().toString(),
    });

    const checkUser = await userModel.findOne({ phoneNumber: userPhoneNumber });

    if (!checkUser) {
      const userData = await user.save();
      if (userData) {
        res.status(200).send({
          success: true,
          msg: "Them nguoi dung thanh cong",
          data: userData,
        });
      } else {
        res.status(200).send({
          success: false,
          msg: "Them nguoi dung that bai",
          data: userData,
        });
      }
    } else {
      res.status(200).send({
        success: false,
        msg: "Nguoi dung da ton tai",
      });
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: "Co loi xay ra" });
  }
};

const login = async (req, res) => {
  //res.send("Hello");
  try {
    const userPhoneNumber = req.body.phoneNumber;

    const checkUser = await userModel.findOne({ phoneNumber: userPhoneNumber });

    if (checkUser) {
      res.status(200).send({
        success: true,
        msg: "Dang nhap nguoi dung thanh cong",
      });
    } else {
      res.status(200).send({
        success: false,
        msg: "Nguoi dung khong ton tai",
      });
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: "Co loi xay ra" });
  }
};

module.exports = {
  register,
  login,
};
