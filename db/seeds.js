const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/collection-app');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);

const User = require('../models/user');
const Collection = require('../models/collection');
const Collectible = require('../models/collectible');

mongoose.Promise = global.Promise;

User.remove({}, (err) => {
    console.log(err);
});
Collection.remove({}, (err) => {
    console.log(err);
});
Collectible.remove({}, (err) => {
    console.log(err);
});

const collectibles1 = new Collectible(
    {
        name: 'Nike Mag',
        year: 2011,
        description: 'Nike partnered up with the Michael J. Fox Foundation to release these worldwide.',
        released: 100,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/jZoUH04.png',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false,
    }
)

const collectibles2 = new Collectible(
    {
        name: '2015 Eminem x Carhartt x Jordan IV',
        year: 2015,
        description: 'Eminem released these through an auction benefitting Literacy Through Songwriting program.',
        released: 4,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/2yIcwBj.png',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false,
    }
)

const collectibles3 = new Collectible(
    {
        name: 'Nike Air Yeezy 2 Red October',
        year: 2014,
        description: 'After leaving Nike over a money dispute to join Adidas, Nike released these sans Kanye West.',
        released: 5000,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/zUSDPuu.png',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false,
    }
)

const collectibles4 = new Collectible(
    {
        name: 'Air Jordan Oregon Ducks',
        year: 2011,
        description: 'First ever Jordan x Ducks collaboration designed by ex-Oregon athlete Jaison Williams and made ONLY for the Oregon team.',
        released: 15,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/1sfwwh5.jpg',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false,
    }
)

const collectibles5 = new Collectible(
    {
        name: 'Staple Design x Nike Dunk Low Pro SB Pigeon',
        year: 2005,
        description: 'These Dunks were designed by Jeff Staple and only released at his Reed Space shop, making it only available in NYC.',
        released: 30,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/KZuKi99.jpg',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collectibles6 = new Collectible(
    {
        name: 'Nike Air Yeezy 2 Solar Red',
        year: 2012,
        description: 'This would be the last shoe Nike released with Kanye.',
        released: 5000,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/Nge57K6.png',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collectibles7 = new Collectible(
    {
        name: 'Nike Air Foamposite NRG Galaxy',
        year: 2012,
        description: 'This would be the first Foamposite to feature all-over graphics.  The hype for this shoe is the stuff of legends.',
        released: 1500,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/g0algVo.jpg',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collectibles8 = new Collectible(
    {
        name: 'Nike Air Foamposite One ParaNorman',
        year: 2012,
        description: 'The only way to snag these was to win a contest commemorating the animated movie ParaNorman.',
        released: 800,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/qYgxdUY.jpg',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collectibles9 = new Collectible(
    {
        name: 'Air Jordan V Tokyo 23',
        year: 2011,
        description: 'One of Nikes biggest releases and it never made it stateside, they were only available in Japan.',
        released: 250,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/9oMM9Cu.jpg',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collectibles10 = new Collectible(
    {
        name: 'Kid Robot x Nike Air Max 1',
        year: 2005,
        description: 'Designed to match the Kid Robot Maserati from 1986, these were released with 1 of 5 hidden insoles. Only sold at Barneys New York.',
        released: 150,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/zo20rn4.jpg',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collectibles11 = new Collectible(
    {
        name: 'Nike Lebron X What the Lebron',
        year: 2012,
        description: 'The first What the Lebrons to make it to retail.',
        released: 600,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/rN5gsSK.png',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collectibles12 = new Collectible(
    {
        name: 'Jeremy Scott x adidas Origin JS Bear',
        year: 2011,
        description: 'Whether he wore them or not Lil Wayne was a big fan of these.',
        released: 202,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/dwHtbZe.jpg',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collectibles13 = new Collectible(
    {
        name: 'KAWS x BAPE Chompers',
        year: 2006,
        description: 'KAWS most famous collaboration.',
        released: 300,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/oB1aEvR.jpg',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collectibles14 = new Collectible(
    {
        name: 'Jeremy Scott x adidas Money Runway',
        year: 2002,
        description: 'Originally made by designer Jeremy Scott for a runway show, adidas partnered with the designer for a limited run.',
        released: 100,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/w1ENxCv.jpg',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collectibles15 = new Collectible(
    {
        name: 'Nike Dunk Low Pro SB Paris',
        year: 2003,
        description: 'French painter Bernard Buffet is the man behind these.',
        released: 202,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/mctmk4r.jpg',
        createdAt: Date.now(),
        upDatedAt: Date.now(),
        forSale: false
    }
)

const collections1 = new Collections(
    {
        name: 'Vintage Kicks',
        description: 'This collection started in 2002 and I have traveled quite a bit to land some of these.' ,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        category: '',
        collectible: [collectibles1, collectibles2, collectibles3, ]
    }
)

const user1 = new User(
    {
    userName: String,
    email: String,
    img: String,
    createdAt: Date,
    updatedAt: Date,
    Collection: [Collection]
    }
)

User1.save((err) => {
    if (err) console.log(err);
    console.log('User1 was created');
});

mongoose.connection.close();
