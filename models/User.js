// create  user models using mongoose
const {Schema, model} = require('mongoose');
const { Thought } = require('.');
// const { User } = require('.User');
const  UserSchema =  new Schema (
    {
        // Add these four attributes to your schema: username, password, email, userCreated

    username: {
        type: String,
        trim: true,
        required: true,
    },
    email:{
        type:   String,
        unique: true,
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid email! Ex: test@test.com']
    },
    thoughts:[
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJson:{
        virtuals: true,
        getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
}
);
// get total count of firends and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.lenth;
});
const User = model('User', UserSchema)
// exporting the user model
module.exports = User;