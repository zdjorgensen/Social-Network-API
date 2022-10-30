const router = require('express').Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers);
router.route('/:userId').get(getUserById);
router.route('/create').post(createUser);
router.route('/update/:userId').post(updateUser);
router.route('/delete/:userId').delete(deleteUser);
router.route('/create/friend/:userId').post(updateUser);
router.route('/delete/friend/:userId').delete(updateUser);

module.exports = router;