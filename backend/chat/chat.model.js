const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: "Chat"
    }
)

module.exports = mongoose.model("Chat", chatSchema);