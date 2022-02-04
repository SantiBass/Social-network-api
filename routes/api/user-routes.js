const router = require('express').Router();
const {

    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    addNewFriend,
    deleteUser,
    deleteFriend
} = require('../../controllers/user-controller');
// api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
// api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delte(deleteUser)

    // route to add and remove friends
router  
    .route('/users/:userId/friends/:firendId')
    .post(addNewFriend)
    .delete(deleteFriend);

    module.exports = router;