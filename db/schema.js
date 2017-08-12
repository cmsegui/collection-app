const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const Shoe = new Schema({
    name: String,
    year: 0,
    description: String,
    released: 0,
    condition: { 
        type: String,
        enum: ['NEW', 'LIKE NEW', 'VERY GOOD', 'GOOD', 'ACCEPTABLE'],
        default: 'GOOD'
    },
    img: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    forSale: {
        type: Boolean,
        default: false
    },
});

const Shoebox = new Schema({
    name: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
    shoe: [Shoe]
});

const User = new Schema({
    userName: String,
    email: String,
    img: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    shoebox: Shoebox
});


Shoe.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

Shoebox.pre('save', function (next) {
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

const ShoeModel = mongoose.model('Shoe', Shoe);
const ShoeboxModel = mongoose.model('Shoebox', Shoebox);
const UserModel = mongoose.model('User', User);

module.exports = {
    User: UserModel,
    Shoebox: ShoeboxModel,
    Shoe: ShoeModel
};