// create  user models using mongoose
const {Schema, model} = require('mongoose');
// const { User } = require('.User');
const  UserSchema =  new Schema ({
// Add these four attributes to your schema: username, password, email, userCreated

    username: {
        type: String,
        trim: true,
        required: 'You must enter a user name!'
    },
    email:{
        type:   String,
        unique: true,
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid email! Ex: test@test.com']
    },

    toJson:{
        virtuals: true,
        getters: true
    },
    
    id: false

});

// exporting the user model
module.exports = User;