const { Schema, mongoose } = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction',
        }
    ],
});

const Thought = mongoose.model('Thought', thoughtSchema);
const handleError = (err) => console.error(err);

Thought.create(
    {
        thoughtText: 'Pretty cool',
        username: 'Zach',
        reactions: 'Nice'
        
    },
    (err) => (err ? handleError(err) : console.log('User Created'))
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length();
})

module.exports = Thought;