const mongoose = require("mongoose");
const ROLES = require("../constants/roles");
const validator = require("validator");

const CommentSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema, "comments");

module.exports = Comment;
