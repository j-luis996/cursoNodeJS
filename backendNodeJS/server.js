const express = require('express');
const bodyParser = require('body-parser');
const router =require('./network/routes');

const dbname = process.env.DBNAME;
const contrasena = process.env.PASSWORD;
const port = 8080;
const uri2 = "mongodb+srv://db_user_cursoNodeJS:"+contrasena+"@cluster0.0pgxi.mongodb.net/"+dbname+"?retryWrites=true&w=majority";
const db = require('./db');
// const uri = "mongodb://db_user_cursoNodeJS:"+contrasena+"@cluster0-shard-00-00.0pgxi.mongodb.net:27017,cluster0-shard-00-01.0pgxi.mongodb.net:27017,cluster0-shard-00-02.0pgxi.mongodb.net:27017/"+dbname+"?ssl=true&replicaSet=atlas-9pdija-shard-0&authSource=admin&retryWrites=true&w=majority";

db(uri2)
      .then(()=>{
            let app = express();

            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({extended: false}));

            router(app);
            app.listen(port);

            console.log('La aplicacion esta escuchando en el puerto: '+ port);
      })
      .catch(err => console.error(err));