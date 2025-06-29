const bcrypt = require("bcrypt");
const { user } = require("../models");

exports.index = async (req, res) => {
  try {
    const listUser = await user.findAll();
    res.status(200).json({
      responseCode: 200,
      responseMessage: "Berhasil Mendapatkan Data User",
      data: listUser,
    });
  } catch (error) {
    res.status(500).json({
      responseCode: 500,
      responseMessage: `Terjadi kesalahan : ${error.message}`,
    });
  }
};

exports.store = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        responseCode: 400,
        responseMessage: "Username dan password wajib diisi",
      });
    }

    const hashPassword = await bcrypt.hash(password, 15);

    const newUser = await user.create({
      username: username,
      password: hashPasswordss,
      isActive: 1,
    });

    res.status(201).json({
      responseCode: 201,
      responseMessage: "User berhasil dibuat",
      data: {
        id: newUser.iduser,
        username: newUser.username,
      },
    });
  } catch (error) {
    if (error.name == "SequelizeUniqueConstraintError") {
      res.status(500).json({
        responseCode: 500,
        responseCode: 500,
        responseMessage: `Username sudah digunakan`,
      });
    } else {
      res.status(500).json({
        responseCode: 500,
        responseMessage: `Terjadi kesalahan server`,
      });
    }
  }
};
