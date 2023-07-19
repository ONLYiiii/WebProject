const path = require("path")
const Faculty = require('../model/staff')

exports.getFaulty = (req, res, next) => {
    Faculty.fetchAll((faulty) => {
        res.render("staff", {
            faultys: faulty,
            pageTitle: "คณาจารย์ - วิทยาการคอมพิวเตอร์",
            path: "/staff",
        })
    })
}

exports.getAdmin = (req, res, next) => {
    res.render("admin", {
        pageTitle: "เข้าสู่ระบบ - วิทยาการคอมพิวเตอร์",
        path: "/admin",
    })
}

exports.getAdminAddStaff = (req, res, next) => {
    res.render("admin-addstaff", {
        pageTitle: "กรอกข้อมูลบุคลากร - วิทยาการคอมพิวเตอร์",
        path: "/admin/add-staff",
    })
}

exports.postAdminAddStaff = (req, res, next) => {
    const { image } = req.files
    if (!image) return res.sendStatus(400)
    image.mv('../PJFinal/public/css/public/image/' + image.name)
    console.log("DONEEEEEE",req.files)
    res.sendStatus(200)
}