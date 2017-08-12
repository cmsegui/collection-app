const express = require('express');
const User = require('../models/user');
const Shoebox = require('../models/shoebox');
const Shoe = require('../models/shoe');
const router = express.Router();

/* GET bucketList listing. */
router.get('/', (req, res, next) => {
  const userId = req.params.userId;
  const shoeboxId = req.params.shoeboxId;
  User.findById(userId)
    .then((user) => {
      const foundShoebox = user.shoebox.find((shoebox) => {
                return shoebox.id === shoeboxId
            });
      res.render('', {
        userId: userId,
        shoeboxId: shoeboxId,
        shoebox: foundShoebox
      })
    })
    .catch((error) => {
      console.log('Error retrieving shoes from db');
      console.log(error);
    });
});

router.get('/new', (req, res) => {
    const userId = req.params.userId;
    const shoeboxId = req.params.shoeboxId
    res.render('', {
        userId: userId,
        shoeboxId: shoeboxId
    })
});

router.post('/', (req, res) => {
    const userId = req.params.userId;
    const shoeboxId = req.params.shoeboxId
    const shoeInfo = req.body;
    User.findById(userId)
        .then( (user) => {
            const newShoe = new Shoe (shoeInfo)
            const foundShoebox = user.shoebox.find((shoebox) => {
                return shoebox.id === shoeboxId
            });
            foundShoebox.shoe.push(newShoe);
            user.save();

            console.log('Shoe was created');
            return res.render('', {
                userId: userId,
                shoeboxId: shoeboxId,
                

            })
        })
        .catch((error) => {
            console.log(error);
            console.log('Failed to create new shoe');
        })
});

router.get('/:', (req, res) => {
    const userId = req.params.userId;
    const shoeboxId = req.params.shoeboxId;
    const shoeId = req.params.shoeId;
    User.findById(userId)
        .then((user) => {
            const foundShoebox = user.shoebox.find((shoebox) => {
                return shoebox.id === shoeboxId
            });
            