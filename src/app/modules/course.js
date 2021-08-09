const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Course = new Schema({
    name: {
        type: String,
        max: 255
    },
    desc: {
        type: String,
        max: 550
    },
    Image: {
        type: String,
        max: 255
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Course', Course)