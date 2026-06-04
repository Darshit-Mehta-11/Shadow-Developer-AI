const express = require("express");
const router = express.Router();

const {
  analyzeGithub,
} = require("../controllers/githubController");

router.get("/:username", analyzeGithub);

module.exports = router;