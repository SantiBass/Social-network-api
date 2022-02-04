const { Thought, User } = require('../models');

const thoughtController = {
  // get all thought
  getAll(req, res) {
    Thoutght.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Thoutght by id
  getThoutghtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create thought
  createThoutght({ body }, res) {
    Thoutght.create(body)
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.json(err));
  },

  // update Thought by id
  updateThoutght({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No Thoutght found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },

  // delete Thoutght
  deleteThoutght({ params }, res) {
    Thoutght.findOneAndDelete({ _id: params.id })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.json(err));
  },
// delete friend
removeFriend({ params}, res) {
    Thoutght.findOneAndUpdate(
        {
            _id: params.getThoutghtById
        },
        {
            $pull: {
                friends: params.friendId
            }
        },
        {
            new:true
        }   
    )
}
  

};

module.exports = thoughtController;
