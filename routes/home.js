const express = require('express')
const router = express.Router()

// const registerData = require('./register')

router.get('/', (req, res, next) => {
    // const users = registerData.username
    res.render("home", { 
        pageTitle: "หน้าทั่วไป",
        path: "/",
    })
})


module.exports = router