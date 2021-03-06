const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
.then(() => {
  const server = express();
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(7851, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:7851');
  });
});

// server.js
// https://medium.com/@sscaff1/nextjs-from-npm-init-to-production-c9f543169bfb
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')