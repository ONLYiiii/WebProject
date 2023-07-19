const express = require('express')
const router = express.Router()

const adminAddStaffController = require('../controllers/admin')

router.get('/add-staff', adminAddStaffController.getAdminAddStaff)

router.post('/add-staff', adminAddStaffController.postAdminAddStaff)

module.exports = router