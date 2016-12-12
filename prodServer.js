/*

This is the production server code
Using express, it will serve the HTML + JS bundle without the redux debugger
Also uses hot reloading.

*/


const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.prod');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 7070;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Production Server Listening at http://localhost:' + port);
});
