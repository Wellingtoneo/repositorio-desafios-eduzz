//import { MongoConnection }  from './database/MongoConnection';
import express from 'express';
import { URLController } from './controller/URLController';
import { config } from './config/Constants';
import mongoose from 'mongoose';

const api = express();
api.use(express.json());

//const database = new MongoConnection();
//database.connect();

const urlController = new URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);

mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
.then(() => {
    console.log("Conectou");
    api.listen(5000, () =>  console.log('Express listening, ok'));
}).catch ((error: any) =>{
    console.log("falhou!!");
    console.log(error);
    process.exit(1);
}
);