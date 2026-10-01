import "dotenv/config";

import express from "express";
import cors from "cors";

import database from "./configs/database.js";

import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.route.js";

const app = express();

const port = process.env.PORT || 8081;

app.use(cors());

app.use(express.json());

database();

app.use("/api/user", userRouter);

app.use("/api/product", productRouter);

app.get("/", (req, res) => {
    res.json({
        message: "E-commerce server is running"
    });
});

app.listen(port, (err) => {

    if (err) {
        console.log(err);
    } else {
        console.log("Server started");
        console.log(`http://localhost:${port}`);
    }

});
