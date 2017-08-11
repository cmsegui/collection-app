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

const collectibles1 = new Collectible (
    {
    name: '2016 Nike Mag',
    description: 'Nike partnered up with Michael J. Fox Foundation to create less than 100 pairs of Mags globally.',
    condition: ,
    img: String,
    createAt: Date,
    updatedAt: Date,
    sale: false,
    }
)

const collectibles2 = new Collectible (
    {
    name: String,
    description: String,
    condition: String,
    img: String,
    createAt: Date,
    updatedAt: Date,
    sale: false,
    }
)

const collectibles3 = new Collectible (
    {
    name: String,
    description: String,
    condition: String,
    img: String,
    createAt: Date,
    updatedAt: Date,
    sale: false,
    }
)

const Collections1 = new Collections (
    {
    name: String,
    description: String,
    createAt: Date,
    updatedAt: Date,
    category: [],
    collectibles: [collectibles]
    }
)
const collectibles4 = new Collectible (
   {
    name: String,
    description: String,
    condition: String,
    img: String,
    createAt: Date,
    updatedAt: Date,
    sale: false,
   }
)

const collectibles5 = new Collectible (
   {
    name: String,
    description: String,
    condition: String,
    img: String,
    createAt: Date,
    updatedAt: Date,
    sale: false,
   }
)

const Collections2 = new Collections (
    {
    name: String,
    description: String,
    condition: String,
    img: String,
    createAt: Date,
    updatedAt: Date,
    sale: false,
    }
)

const collectibles6 = new Collectible (
   {
       name: 'Illegal Food',
       description: 'Because its criminal',
       location: '1044 Greenwood Ave NE, Atlanta, GA 30306',
       duration: '2 hrs',
       linkToInfo: 'http://www.illegalfoodatlanta.com/',
       price: 20
   }
)

const collectibles7 = new Collectible (
   {
       name: 'Plaza Theatre',
       description: 'Catch a flick',
       location: '1049 Ponce De Leon Ave NE, Atlanta, GA 30306',
       duration: '2 hrs',
       linkToInfo: 'http://plazaatlanta.com/',
       price: 20
   }
)

const collectibles8 = new Collectible (
   {
       name: 'Blind Willies',
       description: 'Because everyone should go here before they die.',
       location: '828 North Highland Avenue Northeast, Atlanta, GA 30306',
       duration: '3 hrs',
       linkToInfo: 'http://www.blindwilliesblues.com/',
       price: 50
   }
)

const Collections3 = new Collections (
    {
        name: 'Date Night',
        description: 'A night out on the town with bae.',
        theme: 'Romance',
        totalCost: 100,
        Collectibles: [Collectibles6, Collectibles7, Collectibles8]
    }
)

const User1 = new User (
    {
        firstName: 'Maude',
        lastName: 'Rupert',
        userName: 'MaudeR',
        email: 'maude@yahoo.com',
        img: 'http://www.advanced.style/media/IMG_0566_2-682x1024.jpg',
        Collectionss: [Collections1, Collections2, Collections3]
    }
)

const jeffreyCollectibles1 = new Collectible (
    {
        name: 'Opera Night Club',
        description: 'Go see the the current DJ',
        location: '1150 Crescent Ave NE, Atlanta, GA 30309',
        duration: '2 hr',
        linkToInfo: 'http://operaatlanta.com/',
        price: 50,
    }
)

const jeffreyCollectibles2 = new Collectible (
    {
        name: 'Georgia Beer Garden',
        description: 'Go grab some beers after the show for night cap',
        location: '420 Edgewood Avenue, Atlanta, GA 30312',
        duration: '2 hr',
        linkToInfo: 'http://www.georgiabeergarden.com',
        price: 20,
    }
)

const jeffreyCollectibles3 = new Collectible (
    {
        name: 'Waffle House',
        description: "Go get some some food after hanging with friends at the Georgia Beer Garden",
        location: '66 5th St NW, Atlanta, GA 30308',
        duration: '45 min',
        linkToInfo: 'http://www.wafflehouse.com',
        price: 20,
    }
)

const jeffreyCollections1 = new Collections (
    {
        name: 'Night Out',
        description: 'This is a night for those looking to experience the Atlanta night life.',
        theme: 'Wavy Nights',
        totalCost: 90,
        Collectibles: [jeffreyCollectibles1, jeffreyCollectibles2, jeffreyCollectibles3]
    }
)
const jeffreyCollectibles4 = new Collectible (
    {
        name: 'Opera Night Club',
        description: 'Go see the the current DJ',
        location: '1150 Crescent Ave NE, Atlanta, GA 30309',
        duration: '2 hr',
        linkToInfo: 'http://operaatlanta.com/',
        price: 50,
    }
)

const jeffreyCollectibles5 = new Collectible (
    {
        name: 'Georgia Beer Garden',
        description: 'Go grab some beers after the show for night cap',
        location: '420 Edgewood Avenue, Atlanta, GA 30312',
        duration: '2 hr',
        linkToInfo: 'http://www.georgiabeergarden.com',
        price: 20,
    }
)

const jeffreyCollectibles6 = new Collectible (
    {
        name: 'Waffle House',
        description: "Go get some some food after hanging with friends at the Georgia Beer Garden",
        location: '66 5th St NW, Atlanta, GA 30308',
        duration: '45 min',
        linkToInfo: 'http://www.wafflehouse.com',
        price: 20,
    }
)

const jeffreyCollections2 = new Collections (
    {
        name: 'Night Life',
        description: 'This is a night for those looking to experience the Atlanta night life.',
        theme: 'Wavy Nights',
        totalCost: 90,
        Collectibles: [jeffreyCollectibles4, jeffreyCollectibles5, jeffreyCollectibles6]
    }
)

const jeffreyUser = new User (
    {
        firstName: 'Jeffrey',
        lastName: 'Dawson',
        userName: 'Jdawson',
        email: 'Jdawg@yahoo.com',
        img: 'https://static.pexels.com/photos/157966/person-young-man-beard-emotions-157966.jpeg',
        Collectionss:[jeffreyCollections1, jeffreyCollections2]
    }
)

const murphyCollectibles1 = new Collectible (
    {
        name: 'Biking on the Belt',
        description: 'Rent a bike for a few hours and ride it on the beltline.',
        location: '123 MLK Drive, Atlanta, GA 30303',
        duration: '1.5 hr',
        linkToInfo: 'https://beltline.org/',
        price: 10
    }
)

const murphyCollectibles2 = new Collectible (
    {
        name: 'Hiking',
        description: 'Hike up Stone Mountain.',
        location: '1000 Robert E. Lee Blvd Stone Mountain, GA 30083',
        duration: '2 hr',
        linkToInfo: 'http://www.stonemountainpark.com/',
        price: 20
    }
)

const murphyCollections1 = new Collections (
    {
        name: 'Outdoors',
        description: 'Looking for some fresh air? Here\'s a list of outdoor Collectibles.',
        theme: '',
        totalCost: 30,
        Collectibles: [murphyCollectibles1, murphyCollectibles2]
    }
)

const murphyCollectibles3 = new Collectible (
    {
        name: 'Biking on the Belt',
        description: 'Rent a bike for a few hours and ride it on the beltline.',
        location: '123 MLK Drive, Atlanta, GA 30303',
        duration: '1.5 hr',
        linkToInfo: 'https://beltline.org/',
        price: 10
    }
)

const murphyCollectibles4 = new Collectible (
    {
        name: 'Hiking',
        description: 'Hike up Stone Mountain.',
        location: '1000 Robert E. Lee Blvd Stone Mountain, GA 30083',
        duration: '2 hr',
        linkToInfo: 'http://www.stonemountainpark.com/',
        price: 20
    }
)

const murphyCollections2 = new Collections (
    {
        name: "Pandora's Box",
        description: "Dare to mix things up and jump into the unknown? Here's a list of random things to do for a random day.",
        theme: '',
        totalCost: 30,
        Collectibles: [murphyCollectibles3, murphyCollectibles4]
    }
)

const murphyUser = new User (
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
