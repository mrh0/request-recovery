import express = require("express");
import cors = require("cors");
import {push, pop, popAndSend} from "../recover";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
export default app;

export interface Response {
    accepted: boolean,
    error?: any,
    data?: any
}

//Recovery
app.post("/store", async (req, res) => {
    const {name, packet} = req.body;
    try {
        await push(name, packet);
        res.json({accepted: true} as Response);
    }
    catch(e) {
        res.json({accepted: false, error: e} as Response);
    }
});

app.post("/recover", async (req, res) => {
    const {name, packet} = req.body;    
    res.json({accepted: true} as Response);

    await popAndSend(name);
});