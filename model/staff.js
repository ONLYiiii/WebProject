const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename), 
    "data", 
    "staff_cs.json"
)

module.exports = class Faculty {
    constructor(t) {
        this.faulty = t
    }
    save() {
        fs.readFile(p, (err, fileContent) => {
            let faulty = []
            if (!err) {
                faulty = JSON.parse(fileContent)
            }
            faulty.push(this)
            fs.writeFile(p, JSON.stringify(faulty), (err) => {
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