// create thought models using mongoose
const {Thought, Types} = require('mongoose');
const moment = require('moment');
// const { create } = require('./User');
// const { format } = require('path/posix');
// const { Thought } = require('.');

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
        // get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a') 
    }

},
{ 
    toJSON:{
        getters: true  
    },
    id:false
});



//  getting total counst of thoughts
// ThoughtSchema.virtual('reactionCount').get(function() {
//     return this.reaction.length;
// });
// const ReactionsSchema = model('Thought', ThoughtSchema);

module.exports = ReactionsSchema