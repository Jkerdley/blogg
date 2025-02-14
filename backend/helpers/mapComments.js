module.exports = function (comment) {
    return {
        content: comment.content,
        author: comment.author.login,
        id: comment.id,
        createdAt: new Date(comment.createdAt).toLocaleString("ru-RU").replace(",", ""),
    };
};
