import app from "./src/api/router";
import {createServer} from "http";
require("dotenv").config();

const server = createServer(app);

//NAME, PORT, FORWARD
if(process.argv.length > 2) {
    process.env.NAME = process.argv[2];
    process.env.PORT = process.argv[3];
    process.env.FORWARD = process.argv[4];
}

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on port ${process.env.PORT || 5000}`);
});