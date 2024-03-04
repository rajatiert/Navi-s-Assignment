import express from 'express';
import { connectDb } from './Database/dbConnection.js';
import router from './Routes/routes.js';
import  cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors);

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use("/", router);
const PORT = 3000;

app.listen(PORT , ()=>{
    console.log("server started on port ", PORT);
})

connectDb();
