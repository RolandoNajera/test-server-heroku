const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }

});

UserSchema.methods.toJSON = function() {

    const { __v, password, _id, ...user } = this.toObject();
    user.id = _id;
    return user;

};

module.exports = model( 'User', UserSchema );