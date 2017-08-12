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

const collectible1 = new Collectible(
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
        img: 'http://i.imgur.com/jZoUH04.png'
    }
)

const collectible2 = new Collectible(
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
    }
)

const collectible3 = new Collectible(
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
    }
)

const collectible4 = new Collectible(
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
        
    }
)

const collectible5 = new Collectible(
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
        
    }
)

const collectible6 = new Collectible(
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
        
    }
)

const collectible7 = new Collectible(
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
        
    }
)

const collectible8 = new Collectible(
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
    }
)

const collectible9 = new Collectible(
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
        
    }
)

const collectible10 = new Collectible(
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
        
    }
)

const collectible11 = new Collectible(
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
    }
)

const collectible12 = new Collectible(
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
    }
)

const collectible13 = new Collectible(
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
    }
)

const collectible14 = new Collectible(
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
    }
)

const collectible15 = new Collectible(
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
    }
)

const collection1 = new Collection(
    {
        name: 'Vintage Kicks',
        description: 'This collection started in 2002 and I have traveled quite a bit to land some of these.' ,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        category: '',
        collectible: [collectible1, collectible2, collectible3, collectible4, collectible5, collectible6,
                    collectible7, collectible8, collectible9, collectible10, collectible11, collectible12,
                    collectible13, collectible14, collectible15]
    }
)

const user1 = new User(
    {
    userName: 'Mr. Pink',
    email: 'pinkrobot@email.com',
    img: 'http://i.imgur.com/dVuhTZX.jpg',
    collection: collection1
    }
)

user1.save((err) => {
    if (err) console.log(err);
    console.log('Mr. Pink was created');
});

mongoose.connection.close();
