const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true }, //Needs Validation
    thoughts: [thoughtId],
    friends: [friendId]
});

const User = mongoose.model('User', userSchema);
const handleError = (err) => console.error(err);

User.create(
    {
        name: 'Zach',
        email: 'z.d.jorgensen@gmail.com',
        thoughts: thoughtID,
        friends: friendIs
    },
    (err) => (err ? handleError(err) : console.log('User Created'))
);

module.exports = User;