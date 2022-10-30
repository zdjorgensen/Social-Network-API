const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts);
router.route('/:thoughtId').get(getThoughtById);
router.route('/create').post(createThought);
router.route('/delete/:thoughtId').get(getThoughtById).delete(deleteThought);
router.route('/update/:thoughtId').get(getThoughtById).post(updateThought);
router.route('/reactions/create/thoughtId').post(createReaction);
router.route('/reactions/delete/thoughtId').delete(deleteReaction);

module.exports = router;
