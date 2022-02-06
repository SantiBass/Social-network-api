const router = require('express').Router();
const {
 getAllThoughts,
 getThoutghtById,
 createThoutght,
 updateThoutght,
 deleteThoutght,
 addReaction,
 deleteReaction,
} = require('../../controllers/thought-controller')

// get and create thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThoutght)

//get, put delete thoughts
router
    .route('/:id')
    .get(getThoutghtById)
    .put(updateThoutght)
    .delete(deleteThoutght)

// route to add reaction
router
    .route('/api/thoughts/:thoughtId/reactions')
    .post(addReaction)

    // route to delete reaction ID
router
    .router("/:thoughtId:/reactionId")
    .delte(deleteReaction)


    module.exports = router;
     