const router = require('express').Router();
const {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);
router.route('/:userId').get(getUserById);
router.route('/:userId').get(getUserById).delete(deleteUser);
router.route('/:userId').get(getUserById).post(updateUser);

module.exports = router;