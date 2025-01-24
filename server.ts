import * as fs from 'fs';
import http from 'http';
import https from 'https';
import { parse } from 'url';

import dotenv from 'dotenv';
import express from 'express';
import next from 'next';

dotenv.config({ override: true });

export const PORT = process.env.PORT ?? '9000';

export const USE_HTTPS = process.env.HTTPS === 'true';
export const USE_REDIRECT_HTTPS = process.env.USE_REDIRECT_HTTPS === 'true';

export const OPTIONS =
  USE_HTTPS && process.env.KEY_PATH && process.env.CRT_PATH
    ? {
        key: fs.readFileSync(process.env.KEY_PATH),
        cert: fs.readFileSync(process.env.CRT_PATH),
      }
    : {};

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

if (USE_REDIRECT_HTTPS && USE_HTTPS) {
  const httpServer = express();

  httpServer.get('*', (req, res) => {
    res.redirect(`https://${req.headers.host}${PORT === '443' ? '' : PORT}${req.url}`);
  });
  httpServer.listen(80);
}

app.prepare().then(() => {
  if (USE_HTTPS) {
    https
      .createServer(OPTIONS, (req, res) => {
        const parsedUrl = parse(req.url!, true);
        handle(req, res, parsedUrl);
      })
      .listen(PORT);
  } else {
    http
      .createServer((req, res) => {
        const parsedUrl = parse(req.url!, true);
        handle(req, res, parsedUrl);
      })
      .listen(PORT);
  }
  console.log(`> Server listening at https://localhost:${PORT} as ${dev ? 'development' : process.env.NODE_ENV}`);
});
