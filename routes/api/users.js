const express = require("express");
const router = express.Router();

// @route    GET api/users/test
// @desc     Tests users route
// @access   Public
router.get("/test", (req, res) => {
  res.status(200).json({
    message: "Users works",
  });
});

module.exports = router;
