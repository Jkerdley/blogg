const express = require("express");
const { register, login } = require("../controllers/user");
const router = express.Router({ mergeParams: true });
const chalk = require("chalk");
const mapUser = require("../helpers/mapUser");

router.post("/register", async (req, res) => {
    try {
        const { user, token } = await register(req.body.login, req.body.password);
        res.cookie("token", token, { httpOnly: true }).send({ error: null, user: mapUser(user) });
    } catch (error) {
        res.send({ error: error.message || "Неизвестная ошибка" });
        console.log(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const { user, token } = await login(req.body.login, req.body.password);
        res.cookie("token", token, { httpOnly: true }).send({ error: null, user: mapUser(user) });
    } catch (error) {
        res.send({ error: error.message || "Неизвестная ошибка" });
        console.log(error);
    }
});

router.post("/logout", async (req, res) => {
    res.cookie("token", "", { httpOnly: true }).send({});
});

module.exports = router;
