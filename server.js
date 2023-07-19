const path = require("path")

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const fileUpload = require('express-fileupload');

const errorController = require("./controllers/error")
const homeRouter = require('./routes/home')
const coursesRouter = require('./routes/courses-list')
const coursesDetailRouter = require('./routes/courses-detail')
const staffRouter = require('./routes/staff')
const adminRouter = require('./routes/admin')
const adminaddstaffRouter = require('./routes/admin-addstaff')

app.set("view engine", "ejs")
app.set("views", "views")

app.use(fileUpload());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

app.use('/', homeRouter)
app.use('/', coursesRouter)
app.use('/', coursesDetailRouter)
app.use('/', staffRouter)
app.use('/', adminRouter)
app.use('/admin', adminaddstaffRouter)
app.use(errorController.getError404)

// app.use((req,res,next) => {
//     res.status(404).render("404", {pageTitle: "Page Not Found"})
// })

app.listen(8080); //localhost:8080