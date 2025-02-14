require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const chalk = require("chalk");
const routes = require("./routes");

const PORT = 3004;
const app = express();

// app.use(express.static("../frontend/build"));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.json());

app.use("/", routes);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    app.listen(PORT, () => {
        console.log(chalk.blueBright(`Сервер запущен на порту ${PORT}`));
    });
    // // Обработка сигнала SIGUSR2, который отправляет nodemon перед перезапуском
    // process.once("SIGUSR2", () => {
    //     server.close(() => {
    //         // После закрытия сервера пересылаем сигнал для корректного перезапуска
    //         process.kill(process.pid, "SIGUSR2");
    //     });
    // });
});
