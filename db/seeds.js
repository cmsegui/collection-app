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

const collectibles6 = new Collections(
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
        name: '',
        description: '',
        released: ,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: '',
        createdAt: Date,
        upDatedAt: Date,
        forSale: false
    }
)

const collectibles14 = new Collectible(
    {
        name: '',
        description: '',
        released: ,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: '',
        createdAt: Date,
        upDatedAt: Date,
        forSale: false
    }
)

const collectibles15 = new Collectible(
    {
        name: '',
        description: '',
        released: ,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: '',
        createdAt: Date,
        upDatedAt: Date,
        forSale: false
    }
)

const Collections3 = new Collections(
    {
        name: 'Date Night',
        description: 'A night out on the town with bae.',
        theme: 'Romance',
        totalCost: 100,
        Collectibles: [Collectibles6, Collectibles7, Collectibles8]
    }
)

const User1 = new User(
    {
        firstName: 'Maude',
        lastName: 'Rupert',
        userName: 'MaudeR',
        email: 'maude@yahoo.com',
        img: 'http://www.advanced.style/media/IMG_0566_2-682x1024.jpg',
        Collectionss: [Collections1, Collections2, Collections3]
    }
)

const jeffreyCollectibles1 = new Collectible(
    {
        name: 'Opera Night Club',
        description: 'Go see the the current DJ',
        location: '1150 Crescent Ave NE, Atlanta, GA 30309',
        duration: '2 hr',
        linkToInfo: 'http://operaatlanta.com/',
        price: 50,
    }
)

const jeffreyCollectibles2 = new Collectible(
    {
        name: 'Georgia Beer Garden',
        description: 'Go grab some beers after the show for night cap',
        location: '420 Edgewood Avenue, Atlanta, GA 30312',
        duration: '2 hr',
        linkToInfo: 'http://www.georgiabeergarden.com',
        price: 20,
    }
)

const jeffreyCollectibles3 = new Collectible(
    {
        name: 'Waffle House',
        description: "Go get some some food after hanging with friends at the Georgia Beer Garden",
        location: '66 5th St NW, Atlanta, GA 30308',
        duration: '45 min',
        linkToInfo: 'http://www.wafflehouse.com',
        price: 20,
    }
)

const jeffreyCollections1 = new Collections(
    {
        name: 'Night Out',
        description: 'This is a night for those looking to experience the Atlanta night life.',
        theme: 'Wavy Nights',
        totalCost: 90,
        Collectibles: [jeffreyCollectibles1, jeffreyCollectibles2, jeffreyCollectibles3]
    }
)
const jeffreyCollectibles4 = new Collectible(
    {
        name: 'Opera Night Club',
        description: 'Go see the the current DJ',
        location: '1150 Crescent Ave NE, Atlanta, GA 30309',
        duration: '2 hr',
        linkToInfo: 'http://operaatlanta.com/',
        price: 50,
    }
)

const jeffreyCollectibles5 = new Collectible(
    {
        name: 'Georgia Beer Garden',
        description: 'Go grab some beers after the show for night cap',
        location: '420 Edgewood Avenue, Atlanta, GA 30312',
        duration: '2 hr',
        linkToInfo: 'http://www.georgiabeergarden.com',
        price: 20,
    }
)

const jeffreyCollectibles6 = new Collectible(
    {
        name: 'Waffle House',
        description: "Go get some some food after hanging with friends at the Georgia Beer Garden",
        location: '66 5th St NW, Atlanta, GA 30308',
        duration: '45 min',
        linkToInfo: 'http://www.wafflehouse.com',
        price: 20,
    }
)

const jeffreyCollections2 = new Collections(
    {
        name: 'Night Life',
        description: 'This is a night for those looking to experience the Atlanta night life.',
        theme: 'Wavy Nights',
        totalCost: 90,
        Collectibles: [jeffreyCollectibles4, jeffreyCollectibles5, jeffreyCollectibles6]
    }
)

const jeffreyUser = new User(
    {
        firstName: 'Jeffrey',
        lastName: 'Dawson',
        userName: 'Jdawson',
        email: 'Jdawg@yahoo.com',
        img: 'https://static.pexels.com/photos/157966/person-young-man-beard-emotions-157966.jpeg',
        Collectionss: [jeffreyCollections1, jeffreyCollections2]
    }
)

const murphyCollectibles1 = new Collectible(
    {
        name: 'Biking on the Belt',
        description: 'Rent a bike for a few hours and ride it on the beltline.',
        location: '123 MLK Drive, Atlanta, GA 30303',
        duration: '1.5 hr',
        linkToInfo: 'https://beltline.org/',
        price: 10
    }
)

const murphyCollectibles2 = new Collectible(
    {
        name: 'Hiking',
        description: 'Hike up Stone Mountain.',
        location: '1000 Robert E. Lee Blvd Stone Mountain, GA 30083',
        duration: '2 hr',
        linkToInfo: 'http://www.stonemountainpark.com/',
        price: 20
    }
)

const murphyCollections1 = new Collections(
    {
        name: 'Outdoors',
        description: 'Looking for some fresh air? Here\'s a list of outdoor Collectibles.',
        theme: '',
        totalCost: 30,
        Collectibles: [murphyCollectibles1, murphyCollectibles2]
    }
)

const murphyCollectibles3 = new Collectible(
    {
        name: 'Biking on the Belt',
        description: 'Rent a bike for a few hours and ride it on the beltline.',
        location: '123 MLK Drive, Atlanta, GA 30303',
        duration: '1.5 hr',
        linkToInfo: 'https://beltline.org/',
        price: 10
    }
)

const murphyCollectibles4 = new Collectible(
    {
        name: 'Hiking',
        description: 'Hike up Stone Mountain.',
        location: '1000 Robert E. Lee Blvd Stone Mountain, GA 30083',
        duration: '2 hr',
        linkToInfo: 'http://www.stonemountainpark.com/',
        price: 20
    }
)

const murphyCollections2 = new Collections(
    {
        name: "Pandora's Box",
        description: "Dare to mix things up and jump into the unknown? Here's a list of random things to do for a random day.",
        theme: '',
        totalCost: 30,
        Collectibles: [murphyCollectibles3, murphyCollectibles4]
    }
)

const murphyUser = new User(
    {
        firstName: 'Murphy',
        lastName: 'Jackson',
        userName: 'MJ300',
        email: 'mj3000@hotmail.com',
        img: 'https://images.pexels.com/photos/25758/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb',
        Collectionss: [murphyCollections1, murphyCollections2]
    }
)

User1.save((err) => {
    if (err) console.log(err);
    console.log('Cyd was created');
});

jeffreyUser.save((err) => {
    if (err) console.log(err);
    console.log('Jeffrey was created');
});

murphyUser.save((err) => {
    if (err) console.log(err);
    console.log('Murphy was created');
});

mongoose.connection.close();
Contact GitHub API Training Shop Blog About
