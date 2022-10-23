const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtById);
router.route('/:thoughtId').get(getThoughtById).delete(deleteThought);
router.route('/:thoughtId').get(getThoughtById).post(updateThought);

module.exports = router;
