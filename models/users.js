const { Schema, model } = require('mongoose');

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
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      },
    ],
    friends: [      
      {
        type: Schema.Types.ObjectId,
        ref: 'Users'
      }
    ]
  },

  {
    toJSON: {
      virtuals: true,
      getters:true,
    },
    id: false
}
);

// virtual prop goes here - - 

usersSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
// module.exports = mongoose.model("user", userSchema);


const User = model('Users', usersSchema);

module.exports = User; 