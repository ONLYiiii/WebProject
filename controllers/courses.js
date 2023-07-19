const Course = require('../model/courses')
const CourseDetail = require('../model/courses_detail')

exports.getCourses = (req, res, next) => {
    Course.fetchAll((courses) => {
        res.render("courses-list", {
            course: courses,
            pageTitle: "รายวิชาที่เปิดสอน - วิทยาการคอมพิวเตอร์",
            path: "/courses",
        })
    })
}

exports.getCoursesDetail = (req, res, next) => {
    CourseDetail.fetchAll((coursesdetail) => {
        for (let i = 0; i < coursesdetail.length; i++) {
            if (req.params.id == coursesdetail[i].id) {
                res.render("courses-detail", { 
                    coursedt: coursesdetail[i],
                    pageTitle: req.params.id + " " + coursesdetail[i].subject_th + " - วิทยาการคอมพิวเตอร์",
                    path: "/cs" + req.params.id,
                })
            }
        }
    })
}