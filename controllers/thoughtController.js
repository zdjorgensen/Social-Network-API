const { Thought, User, Reaction } = require('../models');

module.exports = {
    // Gets all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // Gets a thought by the Id
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thoughts) =>
            !thoughts
                ? res.status(404).json({ message: 'No thought '})
                : res.json(thoughts)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Creates a new thought
    createThought (req, res ) {

    },
    // Deletes a single thought
    deleteThought (req, res ) {

    },
    // Updates a single thought
    updateThought (req, res ) {

    },
}