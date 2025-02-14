const express = require("express");
const { getPosts, getPost, addPost, editPost, deletePost } = require("../controllers/post");
const authentificated = require("../middleware/authentificated");
const hasRole = require("../middleware/hasRole");
const mapPost = require("../helpers/mapPost");
const mapComments = require("../helpers/mapComments");
const ROLES = require("../constants/roles");
const { addComment, deleteComment } = require("../controllers/comments");
const chalk = require("chalk");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
    const { posts, lastPage } = await getPosts(req.query.search, req.query.limit, req.query.page);
    res.send({ data: { lastPage, posts: posts.map(mapPost) } });
});

router.get("/:id", async (req, res) => {
    const post = await getPost(req.params.id);
    res.send({ data: mapPost(post) });
});

router.post("/:id/comments", authentificated, async (req, res) => {
    const newComment = await addComment(req.params.id, {
        content: req.body.content,
        author: req.user.id,
    });
    res.send({ data: mapComments(newComment) });
    console.log(chalk.bgGreenBright(`Комментарий добавлен`));
});

router.delete(
    "/:postId/comments/:commentId",
    authentificated,
    hasRole([ROLES.ADMIN, ROLES.MODERATOR]),
    async (req, res) => {
        await deleteComment(req.params.postId, req.params.commentId);
        res.send({ error: null });
        console.log(chalk.bgGreenBright(`Комментарий ${req.params.commentId} удален`));
    }
);

router.post("/", authentificated, hasRole([ROLES.ADMIN]), async (req, res) => {
    const newPost = await addPost({
        title: req.body.title,
        content: req.body.content,
        image: req.body.imageUrl,
    });
    res.send({ data: mapPost(newPost) });
});

router.patch("/:id", authentificated, hasRole([ROLES.ADMIN]), async (req, res) => {
    const updatedPost = await editPost(req.params.id, {
        title: req.body.title,
        content: req.body.content,
        image: req.body.imageUrl,
    });
    res.send({ data: mapPost(updatedPost) });
});

router.delete("/:id", authentificated, hasRole([ROLES.ADMIN]), async (req, res) => {
    await deletePost(req.params.id);
    res.send({ error: null });
});

module.exports = router;
