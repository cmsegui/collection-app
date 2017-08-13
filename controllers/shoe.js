const express = require('express');
const User = require('../models/user');
const Shoebox = require('../models/shoebox');
const Shoe = require('../models/shoe');
const router = express.Router();


router.get('/:id', (req, res) => {
    Shoe.findOne({id: req.params.id})
        .then((shoe) => {
            return res.json(shoe);
    })
});


// router.get('/new', (req, res) => {
//     const userId = req.params.userId;
//     const shoeboxId = req.params.shoeboxId
//     res.render('', {
//         userId: userId,
//         shoeboxId: shoeboxId
//     })
// });

// router.post('/', (req, res) => {
//     const userId = req.params.userId;
//     const shoeboxId = req.params.shoeboxId
//     const shoeInfo = req.body;
//     User.findById(userId)
//         .then((user) => {
//             const newShoe = new Shoe(shoeInfo)
//             const foundShoebox = user.shoebox.find((shoebox) => {
//                 return shoebox.id === shoeboxId
//             });
//             foundShoebox.shoe.push(newShoe);
//             user.save();

//             console.log('Shoe was created');
//             return res.render('', {
//                 userId: userId,
//                 shoeboxId: shoeboxId,


//             })
//         })
//         .catch((error) => {
//             console.log(error);
//             console.log('Failed to create new shoe');
//         })
// });

// router.get('/:shoeId', (req, res) => {
//     const userId = req.params.userId;
//     const shoeboxId = req.params.shoeboxId;
//     const shoeId = req.params.shoeId;
//     User.findById(userId)
//         .then((user) => {
//             const foundShoebox = user.shoebox.find((shoebox) => {
//                 return shoebox.id === shoeboxId
//             });
//             const foundShoe = foundShoebox.shoes.find((shoe) => {
//                 return shoe.id === shoeId
//             })
//             res.render('', {
//                 userId: userId,
//                 shoeboxId: shoeboxId,

//             });
//         })
//         .catch((error) => {
//             console.log('Failed to find shoe');
//         })
// });

// router.get('/:edit', (req, res) => {
//     const userId = req.params.userId;
//     const shoeboxId = req.params.shoeboxId;
//     const shoeId = req.params.shoeId;
//     User.findById(userId)
//         .then((user) => {
//             const foundShoebox = user.shoebox.find((shoebox) => {
//                 return shoebox.id === shoeboxId
//             });
//             const foundShoe = foundShoebox.shoes.find((shoe) => {
//                 return shoe.id === shoeId
//             })
//             res.render('', {
//                 userId: userId,
//                 shoeboxId: shoeboxId,

//             });
//         })
//         .catch((error) => {
//             console.log('Failed to find shoe');
//         })
// });

// router.put('/:shoeId/', (req, res) => {
//     const userId = req.params.userId;
//     const shoeboxId = req.params.shoeboxId;
//     const shoeId = req.params.shoeId;
//     const shoeUpdateInfo = req.body;
//     User.findByIdAndUpdate(userId)
//         .then((user) => {
//             const foundShoebox = user.shoebox.find((shoebox) => {
//                 return shoebox.id === shoeboxId
//             });
//             const foundShoeToUpdate = foundShoebox.shoes.find((shoe) => {
//                 return shoe.id === shoeId
//             })
//             user.save();

//             console.log('Shoe was updated');
//             return res.render('../shoe/show', {
//                 userId: userId,
//                 shoeboxId: shoeboxId,

//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// });

// router.get('/:shoeId/delete', (req, res) => {
//     const userId = req.params.userId;
//     const shoeboxId = req.params.shoeboxId;
//     const shoeId = req.params.shoeId;
//     User.findById(userId)
//         .then((user) => {
//             let foundShoebox = user.shoebox.find((shoebox) => {
//                 return shoebox.id === shoeboxId
//             });
//             const foundShoeToDelete = foundShoebox.shoes.find((shoe) => {
//                 return shoe.id === shoeId
//             })
//             foundShoebox.shoes.remove(foundShoeToDelete);
//             user.save();
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// });

 module.exports = router;