const userModel = require("../models/userModel");

const getAllUser = (req, res) => {
    const users = {
        nama: "Rizki Pandiwa",
        email: "pandiwarizki.rp@gmail.com",
    };

    res.send(users);
};

const getUser = async(req, res) => {
    const user = await userModel.findById(req.params._id);
    res.send(user);
};

module.exports = {
    getAllUser,
    getUser,
};