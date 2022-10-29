const router = require('express').Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getUserById);
router.route('/delete/:userId').get(getUserById).delete(deleteUser);
router.route('/update/:userId').get(getUserById).post(updateUser);

module.exports = router;