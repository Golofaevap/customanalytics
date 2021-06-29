const express = require("express");
const router = express.Router();
// const Part = require("../models/parts");

router.get("/", async (req, res) => {
    try {
        res.json({parts:2});
    } catch (err) {
        res.json({ message: err });
    }
});

router.post("/", async (req, res) => {
    try {
        res.json({parts:1});
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;
