// create thought models using mongoose
const {Schema, model, Types} = require('mongoose');
const moment = require('moment');
const ReactionsSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username:{
        type: String,
        required: true, 
    },
    createdAt:{
        type: Date,
        default: Date.now,
        
    }

},
{ 
    toJSON:{
        getters: true  
    }
});


const ThoughtSchema = new Schema({
    // add thoughtText, createdAt, usermane and reactions
    thoughtText:{
        type: String,
        required: true,
        minlength: 1,
        maxlenth: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
       
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


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought