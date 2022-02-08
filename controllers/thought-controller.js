const { Thought, User } = require('../models');

const thoughtController = {
  // get all thought
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({
        path: 'user',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtData => {
          res.json(dbThoughtData)})
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Thoutght by id
  getThoutghtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: 'user',
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
    console.log(body)
    Thought.create(body).then(({_id}) =>{
      console.log(_id)
        return User.findOneAndUpdate(
            {
            username: body.username
           },
           {
               $push: {thoughts: _id}
           },
           {
               new: true, 
           }
        )
        }).then(dbUserData => {
          console.log(dbUserData)
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this username!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
     },
  addReaction({params, body}, res){
      Thought.findOneAndUpdate(
        {
             _id: params.thoughtId
        },
        {
            $push: {reactions: body}
        },
        {
            new: true, runValidators: true
        }
      ) .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No Thoutght found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
        {
         _id: params.thoughtId
        },
        {
          $pull: { reactions: body}  
        },
        {
            new: true
        })
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
    Thought.findOneAndDelete({ _id: params.id })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.json(err));
  },

};

module.exports = thoughtController;
