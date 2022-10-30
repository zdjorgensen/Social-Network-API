const router = require('express').Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers);
router.route('/:userId').get(getUserById);
router.route('/create').post(createUser);
router.route('/update/:userId').post(updateUser);
router.route('/delete/:userId').delete(deleteUser);
router.route('/create/friends/:userId').post(addFriend);
router.route('/delete/:userId/friend/:friendId').delete(deleteFriend);

module.exports = router;