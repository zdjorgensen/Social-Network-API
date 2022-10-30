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
                    ? res.status(404).json({ message: ' This is not a user.' })
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
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'This user does not exist.' })
                    : User.findOneAndUpdate(
                        { users: req.params.userId },
                        { $pull: { users: req.params.userId } },
                        { new: true }
                    ),
                res.json({ message: 'User deleted.' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err.message);
            });
    },

    // Updates a single user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: { username: req.body.username, email: req.body.email }},
            { runValidators: true, new: true }
        )
            .then((user) =>
                res.json(user)
            )
            .catch((err) =>
                res.status(500).json(err.message));
    },

    createFriend(req, res) {

    },

    deleteFriend(req, res) {

    }
}