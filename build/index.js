"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("./src/api/router");
var http_1 = require("http");
require("dotenv").config();
var server = http_1.createServer(router_1.default);
//NAME, PORT, FORWARD
if (process.argv.length > 2) {
    process.env.NAME = process.argv[2];
    process.env.PORT = process.argv[3];
    process.env.FORWARD = process.argv[4];
}
server.listen(process.env.PORT || 5000, function () {
    console.log("Server listening on port " + (process.env.PORT || 5000));
});
//# sourceMappingURL=index.js.map