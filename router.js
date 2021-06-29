const express = require("express");
const router = express.Router();
// const Part = require("../models/parts");

router.get("/", async (req, res) => {
    console.log("get");
    try {
        const { code, clientId } = req.query;
        console.log(code, clientId);
        res.json({ code, clientId });
    } catch (err) {
        res.json({ message: err });
    }
});

router.post("/", async (req, res) => {
    console.log("post");
    try {
        const { code, clientId } = req.body;
        console.log(code, clientId);

        res.json({ code, clientId });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
