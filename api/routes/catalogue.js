const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  //   fs.readFile("./files/catalogue.xml", "utf-8", (err, data) => {
  //     console.log(res.body);
  //     if (!err) {
  //       res.send(data);
  //       res.end();
  //     }
  //   });

  fs.readFile("./files/catalogue.xml", "utf-8", (err, data) => {
    if (!err) {
      res.writeHead(200, { "Content-Type": "text/xml" });
      res.write(data);
      return res.end();
    }
  });
});

module.exports = router;
