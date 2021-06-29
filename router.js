const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
// const Part = require("../models/parts");

function sentOfflineConversion(code, clientId) {
    const baseUrl = `https://www.google-analytics.com/collect`;
    // const baseUrl = `https://www.google-analytics.com/debug/collect`;
    const tail = `?v=1&tid=${code}&cid=${clientId}&t=event&ec=t&ea=o&el=${clientId}&ni=true&ti=TI-${Math.round(
        Math.random() * 99999999
    )}&tr=100&pa=purchase&pr1nm=Offline_Conversion&pr1qt=1&pr1pr=100&pr1ca=Offline&ua=AppleWebKit/537`;
    const sendUrl = `${baseUrl}${tail}`;
    console.log("where to send ", sendUrl);
    fetch(`${baseUrl}${tail}`, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
        },
    }).then((res) => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        // res.json().then((data) => {
        //     console.log(data);
        // });
        // console.log(res.headers.raw());
        // console.log(res.headers.get("content-type"));
    });
}

router.get("/", async (req, res) => {
    console.log("get");
    try {
        const { code, clientId } = req.query;
        console.log(code, clientId);
        sentOfflineConversion(code, clientId);
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
        sentOfflineConversion(code, clientId);

        res.json({ code, clientId });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
