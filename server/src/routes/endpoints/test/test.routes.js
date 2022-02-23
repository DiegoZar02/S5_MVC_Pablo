import express from "express";

export const TestRouter = express.Router();

TestRouter.get('/', (req, res) => {
    res.status(200).send({
        msg: 'Funcionando'
    });
});