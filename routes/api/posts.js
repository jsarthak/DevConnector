const express = require("express");
const router = express.Router();

// @route    GET api/posts/test
// @desc     Tests post route
// @access   Public
router.get("/test", (req, res) => {
  res.status(200).json({
    message: "Posts works",
  });
});

module.exports = router;
