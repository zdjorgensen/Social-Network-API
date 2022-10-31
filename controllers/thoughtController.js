const { Thought, User } = require('../models');

module.exports = {
    // Gets all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    // Gets a single thought by the Id
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'This thought does not exist.' })
                    : res.json(thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Creates a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err)
                return res.status(500).json(err)
            })
    },

    // Deletes a single thought
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'This thought does not exist.' })
                    : Thought.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    ),
                res.json({ message: 'Thought deleted.' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err.message);
            });
    },

    // Updates a single thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: { thoughtText: req.body.thoughtText, username: req.body.username, reactions: req.body.reactions } },
            { new: true }
        )
            .then((thought) =>
                res.json(thought)
            )
            .catch((err) =>
                res.status(500).json(err.message));
    },

    // Creates a reaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reaction: req.body.reactions, } },
            { new: true }
        )
            .then((thought) =>
                res.json(thought)
            )
            .catch((err) =>
                res.status(500).json(err.message)
            );
    },

    // Deletes a reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { reactionId: req.params.reactionId } },
            { new: true }
        )
            .then((user) =>
                res.json(user)
            )
            .catch((err) =>
                res.status(500).json(err.message)
            );
    },
}
