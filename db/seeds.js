require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const User = require('../models/user');
const Shoebox = require('../models/shoebox');
const Shoe = require('../models/shoe');

mongoose.Promise = global.Promise;

User.remove({}, (err) => {
    console.log(err);
});
Shoebox.remove({}, (err) => {
    console.log(err);
});
Shoe.remove({}, (err) => {
    console.log(err);
});

const shoe1 = new Shoe(
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

const shoe2 = new Shoe(
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

const shoe3 = new Shoe(
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

const shoe4 = new Shoe(
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

const shoe5 = new Shoe(
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

const shoe6 = new Shoe(
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

const shoe7 = new Shoe(
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

const shoe8 = new Shoe(
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

const shoe9 = new Shoe(
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

const shoe10 = new Shoe(
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

const shoe11 = new Shoe(
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

const shoe12 = new Shoe(
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

const shoe13 = new Shoe(
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

const shoe14 = new Shoe(
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

const shoe15 = new Shoe(
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

const shoe16 = new Shoe(
    {
        name: 'Nike Air Jordan 11 BLACKOUT',
        year: 2012,
        description: 'The most expenseive sneaker out of the box, most people thought this would be a sample of a later release but it was the only one.',
        released: 1,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/a3sHaoX.jpg'
    }
)

const shoe17 = new Shoe(
    {
        name: 'Nike Dunk High LE WU-TANG',
        year: 1999,
        description: 'Rumor has it these were only made for friends and family of Wu-Tang.',
        released: 36,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/ukHUyE9.jpg'
    }
)

const shoe18 = new Shoe(
    {
        name: 'Nike Air Yeezy 1 Grammy Prototype',
        year: 2008,
        description: 'Kanye wore these to the Grammys when his partnership with Nike was announced.',
        released: 1,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/mTxX9IB.jpg'
    }
)

const shoe19 = new Shoe(
    {
        name: 'Nike Air Jordan 3',
        year: 1988,
        description: 'The OG of Jordans, these still have the tags on them.',
        released: 5000,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/n8QkPwV.jpg'
    }
)

const shoe20 = new Shoe(
    {
        name: 'Nike Dunk SB High FLOM',
        year: 2005,
        description: 'Aside from 3 pairs that were rafflied off to the fiends, these were exclusively for friends and family of FUTURA.',
        released: 24,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/dcFGVxw.jpg'
    }
)

const shoe21 = new Shoe(
    {
        name: 'Gold-Dipped Nike Dunks',
        year: 2005,
        description: 'Designed by artist Kenneth Courtney, these were dipped in 24K gold.',
        released: 5,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/7ps7dt0.jpg'
    }
)

const shoe22 = new Shoe(
    {
        name: 'UNDFTD x Air Jordan 4',
        year: 2005,
        description: 'Jordans first collaboration.',
        released: 79,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/k92tBvY.jpg'
    }
)

const shoe23 = new Shoe(
    {
        name: 'SF x PUMA SharkBait',
        year: 2008,
        description: 'Made with sharkskin leather, this was only released to friends and family of SneakerFreaker.',
        released: 30,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/KnOj5xw.jpg'
    }
)

const shoe24 = new Shoe(
    {
        name: 'Avia 880',
        year: 1989,
        description: 'This shoe by a now defunct brand, was worn by 4 NBA Hall of Famers in the 80s.',
        released: 5000,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/MuYCQyF.jpg'
    }
)

const shoe25 = new Shoe(
    {
        name: 'Reebok The Pump',
        year: 1989,
        description: 'The OG Pump...everyone had a pair of Pumps.',
        released: 50000,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/uoUR7Sq.jpg'
    }
)

const shoe26 = new Shoe(
    {
        name: 'Nike Lebron South Beach 8',
        year: 2010,
        description: 'This was not only a new beginning for colorways but for Lebron making the move to Miami.',
        released: 1000,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/GQyJFsm.jpg'
    }
)

const shoe27 = new Shoe(
    {
        name: 'Nike Dunk Low Pro SB Heineken',
        year: 2003,
        description: 'The beer company wanted no part of this release.',
        released: 5000,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/VLv7dfS.jpg'
    }
)

const shoe28 = new Shoe(
    {
        name: 'BAPE x adidas Super Ape Star',
        year: 2003,
        description: 'A B-side version was released n 2011 but it did not compare to the OG.',
        released: 5000,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/MQbMZFL.jpg'
    }
)

const shoe29 = new Shoe(
    {
        name: 'Nike Dunk High Pro SB UNKLE',
        year: 2004,
        description: 'You may not remember UNKLE but you should remember that Futura designed these.',
        released: 1000,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/JjrwH3o.jpg'
    }
)

const shoe30 = new Shoe(
    {
        name: 'Nike HyperDunk McFly',
        year: 2008,
        description: 'Kobe Bryant autographed these out of a DeLorean to celebrate the release.',
        released: 3000,
        condition: {
            type: '',
            enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
            default: 'GOOD'
        },
        img: 'http://i.imgur.com/grWZu09.jpg'
    }
)

const Shoebox1 = new Shoebox(
    {
        name: 'Vintage Kicks',
        description: 'This collection started in 2002 and I have traveled quite a bit to land some of these.' ,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        shoes: [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8, shoe9, shoe10, shoe11, shoe12, shoe13, shoe14, shoe15]
    }
)

const Shoebox2 = new Shoebox(
    {
        name: 'For the Purists',
        description: 'Nothing crazy just dope sneakers.' ,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        shoes: [shoe16, shoe17, shoe18, shoe19, shoe20, shoe21, shoe22, shoe23, shoe24, shoe25, shoe26, shoe27, shoe28, shoe29, shoe30]
    }
)

const user1 = new User(
    {
    userName: 'Mr. Pink',
    email: 'pinkrobot@email.com',
    img: 'http://i.imgur.com/dVuhTZX.jpg',
    shoebox: Shoebox1
    }
)

const user2= new User(
    {
    userName: 'Jeffrey Lebowski',
    email: 'thedude@email.com',
    img: 'http://i.imgur.com/ooGKhIg.jpg',
    shoebox: Shoebox2
    }
)


user1.save().then(() => {
    console.log('user saved!');    
}).catch((err) => {
    console.log('error saving user', err);
});

user2.save().then(() => {
    console.log('user saved!');    
}).catch((err) => {
    console.log('error saving user', err);
});

shoebox1.save().then((shoebox) => {
    shoebox.shoes.map((shoe) => {
        shoe.save().then((shoe) => {
            console.log(shoe.name + ' saved.');
        });
    });
});

shoebox2.save().then((shoebox) => {
    shoebox.shoes.map((shoe) => {
        shoe.save().then((shoe) => {
            console.log(shoe.name + ' saved.');
        });
    });
});


mongoose.connection.close();
