const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get("/", (req,res) => {
  User.find(null, {userName: true, email: true, img: true}).then((users) => {
    res.json(users);
  }).catch((err) => {
      res.json(err);
  })
});

router.get("/:email", (req,res) => {
  User.findOne({email: req.params.email}).then((users) => {
    res.json(users);
  });
});


module.exports = router;