const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true,
        unique: true ,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/], //Regex for matching an email from challenge 17
    }, 
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
});

const User = model('User', userSchema);
const handleError = (err) => console.error(err); 
// User.create is not working here
// User.create(
//     {
//         name: 'Zach',
//         email: 'z.d.jorgensen@gmail.com',
        
//     },
//     (err) => (err ? handleError(err) : console.log('User Created'))
// );

module.exports = User;