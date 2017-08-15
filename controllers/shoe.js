const express = require('express');
const User = require('../models/user');
const Shoebox = require('../models/shoebox');
const Shoe = require('../models/shoe');
const router = express.Router();

router.get('/', (req, res) => {
    Shoe.find()
        .then((shoe) => {
            return res.json(shoe);
        });
});

router.get('/:shoeId', (req, res) => {
    Shoe.findById(req.params.shoeId)
        .then((shoe) => {
            return res.json(shoe);
        });
});

router.post('/', (req, res) => {
    const newShoe = new Shoe({
        name: req.body.name,
        year: req.body.year,
        description: req.body.description,
        released: req.body.released,
        condition: req.body.condition,
        img: req.body.img
    });
    newShoe.save().then((shoe) => {
        return res.json(shoe)
    });
})

router.put('/:shoeId', (req, res) => {
    Shoe.findByIdAndUpdate(req.params.shoeId, {
        name: req.body.name,
        year: req.body.year,
        description: req.body.description,
        released: req.body.released,
        condition: req.body.condition,
        img: req.body.img
    })
        .then((shoe) => {
            return res.json(shoe);
        });
});

router.delete('/:shoeId', (req, res) => {
    Shoe.findByIdAndRemove(req.params.shoeId)
    .then((shoe) => {
        return res.json({
            message: 'shoe deleted'
        });
    });
});
    





module.exports = router;