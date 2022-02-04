// create thought models using mongoose
const {Schema, model, Types} = require('mongoose');
const moment = require('moment');
const { create } = require('./User');
const { format } = require('path/posix');
const { Thought } = require('.');
const ThoughtSchema = new Schema({
    // add thoughtText, createdAt, usermane and reactions
    thoughtText:{
        type: String,
        required: true,
        minlength: 1,
        maxlenth: 280,
    },
    createdAt: {
        type: true,
        defult: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a') 
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionsSchema]

},
    {
        toJSON:{
            virtuals: true,
            getters:true
        },
        id: false
    }

   
);
const ReactionsSchema = new Schema({
    


});
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought