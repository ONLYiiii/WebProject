const express = require('express')
const router = express.Router()

const coursesControler = require('../controllers/courses')

router.get('/courses', coursesControler.getCourses)


module.exports = router