const Comment = require("../models/Comment");
const Post = require("../models/Post");

async function addComment(postId, comment) {
    const newComment = await Comment.create(comment);
    await Post.findByIdAndUpdate(postId, { $push: { comments: newComment } });
    await newComment.populate("author");
    return newComment;
}

async function deleteComment(postId, commentId) {
    await Comment.deleteOne({ _id: commentId });
    await Post.findByIdAndUpdate(postId, { $pull: { comments: commentId } });
}

async function editComment(id, comment) {
    const newComment = await Comment.findByIdAndUpdate(id, comment, { returnDocument: "after" });
    return newComment;
}

module.exports = {
    addComment,
    editComment,
    deleteComment,
};
