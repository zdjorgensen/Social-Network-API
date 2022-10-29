const { Thought, User, Reaction } = require('../models');

module.exports = {
    // Gets all thoughts
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // Gets a single user by the Id
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
            .then((users) =>
                !users
                    ? res.status(404).json({ message: ' This is not a user' })
                    : res.json(users)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Creates a new user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err)
            return res.status(500).json(err)
        })
    },

    // Deletes a single user
    deleteUser(req, res) {
        const deletedUser = User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $pull: { userId: req.params.userId } },
        )
        res.json(deletedUser)
        .catch((err) =>
            res.status(500).json(err.message));
    },

    // Updates a single user
    updateUser(req, res) {
        const updatedUser = User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $set: { username: req.body.username, email: req.body.email } }
        )
        res.json(updatedUser)
        .catch((err) => 
            res.status(500).json(err.message));
    }
}