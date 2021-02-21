const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("API IS WORKING PROPERLY");
});

module.exports = router;
