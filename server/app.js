/* Requierments */
//
/* pasar código de ES6 a ES5 */
//
// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const path = require('path');
//
/* código de ES6 */
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

var dbname = 'admin';

/* DB Conection */

// const { MongoClient } = require('mongodb');

/* 
const uri = "mongodb+srv://mrif-site:%C2%A1Vamos_a_rodar_con_toda%21-2022@mrif.jnakv.mongodb.net/mrif?retryWrites=true&w=majority";
client.connect(uri, options).then(
    () => {
        console.log('Example DB "'+dbname+'" conected');
    },
    err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
}); */

const mongoose = require('mongoose');

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const uri = 'mongodb://mongoadmin:NuevaIncCR2021Mongo@localhost:27017/'+dbname;
const uri = "mongodb+srv://mrif-site:%C2%A1Vamos_a_rodar_con_toda%21-2022@mrif.jnakv.mongodb.net/mrif?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useUnifiedTopology:true};

// Or using promises
mongoose.connect(uri, options).then(
    () => {
        console.log('Example DB "'+dbname+'" conected');
    },
    err => {
        console.log(err);
    }
);

/* Middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//
// Para acceder al directorio actual
// app.use(express.static(path.join(__dirname, 'public')));
//
/* Middleware para Vue.js router modo history */
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


/* Routes */ 
// app.get('/', function(req, res) {
//     res.send('Hello World!');
// });
app.use('/api', require('./routes/new-person'));

/* Ports */
//
// /* Creación de puerto de prueba estático */
//     app.listen(3000, function() {
//     console.log('Expample app listening on port 3000!');
// });
//
/* Creación de puerto de prueba dinámico */
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
    console.log('Example app listening on port '+ app.get('port'));
});

