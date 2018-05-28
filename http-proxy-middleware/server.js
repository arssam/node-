var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/', proxy({
  target: 'http://120.79.35.65',
  changeOrigin: true,
  // pathRewrite: {
  //   '^/rest': ''
  // },
}));
app.listen(5000);