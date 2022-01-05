const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// **User**:

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)


// Schema to create user model
const usersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate,
    },
    // thoughts: {
    // },
    // friends: {
    // },
    required: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// virtual prop goes here - - 


const Users = model('users', usersSchema);

module.exports = Users;
