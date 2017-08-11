const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const Collectible = new Schema({
    name: String,
    description: String,
    released: 0,
    condition: { 
        type: String,
        enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
        default: 'GOOD'
    },
    img: String,
    createdAt: Date,
    updatedAt: Date,
    forSale: false,
});

const Collection = new Schema({
    name: String,
    description: String,
    createdAt: Date,
    updatedAt: Date,
    category: [],
    Collectible: [Collectible]
});

const User = new Schema({
    userName: String,
    email: String,
    img: String,
    createdAt: Date,
    updatedAt: Date,
    Collection: [Collection]
});


Collectible.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

Collection.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

User.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

const CollectibleModel = mongoose.model('Collectible', Collectible);
const CollectionModel = mongoose.model('Collection', Collection);
const UserModel = mongoose.model('User', User);

module.exports = {
    User: UserModel,
    Collection: CollectionModel,
    Collectible: CollectibleModel
};