
const { Thoughts } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts (req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getaThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought
  deleteThought (req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Student.deleteMany({ _id: { $in: thought.students } })
      )
      .then(() => res.json({ message: 'thought and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // addd reaction
  addaReaction(req, res) {
    Thoughts.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$push: { reactions: req.body } },
        { new: true }
    )
    .then((thought) =>
        !thought
            ? res.status(404).json({ message: 'No thought found'})
            : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));

  },

  deleteaReaction(req, res) {
      Thoughts.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { new: true }
      )
          .then((thought) =>
          !thought 
              ? res
                  .status(404)
                  .json({ message: 'No thought found'})
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
  }
};
