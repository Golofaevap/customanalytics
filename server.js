const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
// app.use(bodyParser.json({limit: '50mb', extended: true}))

// --------------------------------------------------
const router = require("./router");
app.use("/api", router);

// mongoose.connect("mongodb://localhost:27017/grab-data-for-carcentre", () => {
//     console.log("connected to db...");
// });
app.get("/", (req, res) => {
    res.send("we are on home");
});

app.listen(process.env.PORT || 3031, () => {
    console.log(`Example app listening at http://localhost:${3001}`);
});
