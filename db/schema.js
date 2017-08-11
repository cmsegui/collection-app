const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const collectibles = new Schema({
    name: String,
    description: String,
    condition: String,
    img: String,
    createAt: Date,
    updatedAt: Date,
    sale: false,
});

const collections = new Schema({
    name: String,
    description: String,
    createAt: Date,
    updatedAt: Date,
    category: [],
    collectibles: [collectibles]
});

const users = new Schema({
    userName: String,
    email: String,
    img: String,
    createAt: Date,
    updatedAt: Date,
    collections: [collections]
});


collectibles.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

collections.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

users.pre('save', function (next) {
    now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

const collectiblesModel = mongoose.model('collectibles', collectibles);
const collectionsModel = mongoose.model('collections', collections);
const usersModel = mongoose.model('users', users);

module.exports = {
    users: usersModel,
    collections: collectionsModel,
    collectibles: collectiblesModel
};