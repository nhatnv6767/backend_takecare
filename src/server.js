import express from "express";

import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"

require("dotenv").config()

// instance of express
let app = express()

// config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app)
initWebRoutes(app)

let port = process.env.PORT
app.listen(port, ()=> {
    console.log("Backend NodeJS is running on port " + port)
})
