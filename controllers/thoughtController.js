const { Thought, User, Reaction } = require('../models');

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
            // .select('-__v')
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thought ' })
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
        const deletedThought = Thought.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { thoughtId: req.params.thoughtId } },
        )
        res.json(deletedThought)
        .catch((err) =>
            res.status(500).json(err.message));
    },

    // Updates a single thought
    updateThought(req, res) {
        const updatedThought = Thought.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { $set: {thoughtText: req.body }}
        )
        res.json(updatedThought)
        .catch((err) => 
            res.status(500).json(err.message));
    }
}
