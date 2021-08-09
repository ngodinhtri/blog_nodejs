const mongoose = require('mongoose')
const CourseModel = require('../modules/course')
const {
    mongooseToObject
} = require('../../util/mongoose')

class CoursesController {
    show(req, res, next) {
        CourseModel.findOne({
                slug: req.params.slug
            })
            .then(course => {
                if (!course) {
                    res.render('404')
                    return
                }
                res.render('course', {
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }
}

module.exports = new CoursesController