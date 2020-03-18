/*require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

require("./database");

const express = require("express");
const routes = require('./routes')
const cors = require("cors");

class AppController {
    constructor() {
        this.express = express();   
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(cors());
        this.express.use(express.json());

    }

    routes(){
        this.express.use( "/api", routes);
    }

}

module.exports = new AppController().express;*/