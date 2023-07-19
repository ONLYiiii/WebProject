const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename), 
    "data", 
    "courses_list.json"
)

module.exports = class Course {
    constructor(t) {
        this.id = t
    }
    save() {
        fs.readFile(p, (err, fileContent) => {
            let courses = []
            if (!err) {
                courses = JSON.parse(fileContent)
            }
            courses.push(this)
            fs.writeFile(p, JSON.stringify(courses), (err) => {
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