const usersCtrl = {};

const User = require('../models/User');

usersCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    });
    await newUser.save();
    res.json({ message: "User Created!" })
};

usersCtrl.updateUser = async (req, res) => {
    const { username } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        username       
    });
    res.json({ message: "User Updated!" })
};

usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User Deleted!" })
};

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

usersCtrl.getOneSingleUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

module.exports = usersCtrl;