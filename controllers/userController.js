const { Users } = require('../models');

module.exports = {
  // create a new user
  createUser(req, res) {
    Users.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // update a user
  updateUser(req, res) {
    console.log(req.body);
  },

  // delete a user

  deleteUser(req, res) {
    
  },

  // Get all users
  getAllUsers(req, res) {
    Users.find()
      .then(async (users) => {
        const userObj = {
          users,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single user
  getaUser(req, res) {
    Users.findOne({ _id: req.params.userId })
      .select('-__v')
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  addFriend(req, rew) {

  },

  deleteFriend(req, res) {

  },
  
// //   // Delete a user - cant figure issue
  // deleteUser(req, res) {
  //   Users.findOneAndRemove({ _id: req.params.userId })
  //     .then((user) =>
  //       !user
  //         ? res.status(404).json({ message: 'No such user exists' })
  //     .then((course) =>
  //       !course
  //         ? res.status(404).json({
  //             message: 'user deleted, d',
  //           })
  //         : res.json({ message: 'user successfully deleted' })
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     }):
      
  //   },
}