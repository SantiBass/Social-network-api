const router = require('express').Router();
const {
 getAllThought,
 getThoughtById,
 createThought,
 updateThought,
 deleteThought,
 addReaction,
 deleteReaction,
} = require('../../controllers/thought-controller')

// get and create thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought)

//get, put delete thoughts
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

// route to add reaction
router
    .route('/api/thoughts/:thoughtId/reactions')
    .post(addReaction)

    // route to delete reaction ID
router
    .router("/thoughtId:/reactionId")
    .delte(deleteReaction)


    module.exports = router;
    