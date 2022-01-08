const router = require('express').Router();
const {
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
  getAllUsers,
  getaUser,
} = require('../../controllers/userController');

// all user
router.route('/').get(getAllUsers);

// create
router.route('/').post(createUser);

// update
router.route('/:userId').put(updateUser);

// delete
router.route('/:userId').delete(deleteUser);


// single user
router.route('/:userId').get(getaUser);

// add friend
router.route('/:userId/friends/:friendId').post(addFriend);

// delete friend
router.route('/:userId/friends/:friendId').delete(deleteFriend);



module.exports = router;