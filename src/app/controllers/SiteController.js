const mongoose = require('mongoose')
const CourseModel = require('../modules/course')
const {
    multiMongooseToObject
} = require('../../util/mongoose')

class SiteController {
    index(req, res, next) {
        CourseModel.find({})
            .then(courses => res.render('home', {
                courses: multiMongooseToObject(courses)
            }))
            .catch(next)
    }

    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController