const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // maxLength: 280,
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
    }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;