const express = require("express");
const next = require("next");
const admin = require("firebase-admin");

const port = process.env.PORT || 5050;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  let routes = require("./routes");

  routes.init(server);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
