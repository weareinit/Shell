/**
 * Proxy sever for serving our static bundle
 */
const serveStatic = require("serve-static");
import cors from "cors";

const express = require("express");
const proxy_server = express();
s;
const PORT = process.env.PORT || 3005;

proxy_server.use(cors());
// Removes trailling slashes from  url
// https://stackoverflow.com/questions/41948228/how-to-remove-trailing-slash-in-react-router-urls
proxy_server.use(function(req, res, next) {
  if (req.path.length > 1 && /\/$/.test(req.path)) {
    var query = req.url.slice(req.path.length);
    res.redirect(301, req.path.slice(0, -1) + query);
  } else {
    next();
  }
});

proxy_server.use(serveStatic("build", { index: ["index.html", "index.htm"] }));

proxy_server.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

proxy_server.listen(PORT, () => console.log(`🐚 is live on port ${PORT}`));
