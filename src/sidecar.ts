const express = require('express');
const app = express();

import httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

proxy.on('proxyRes', function (proxyRes, req, res) {
    console.log("RES:", res);
});

app.all('/*', (req, res) => {
    proxy.web(req, res, { target: process.env.TARGET || 'localhost:80' });
});

app.listen(process.env.PORT || 80);