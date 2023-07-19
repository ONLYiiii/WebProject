const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename), 
    "data", 
    "courses_detail.json"
)

module.exports = class CourseDetail {
    constructor(t) {
        this.id2 = t
    }
    save() {
        fs.readFile(p, (err, fileContent) => {
            let coursesdetail = []
            if (!err) {
                coursesdetail = JSON.parse(fileContent)
            }
            coursesdetail.push(this)
            fs.writeFile(p, JSON.stringify(coursesdetail), (err) => {
                console.log(err);
            })
        })
    }

    static fetchAll(cb) {
        fs.readFile(p, (err, fileContent ) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
    }
}