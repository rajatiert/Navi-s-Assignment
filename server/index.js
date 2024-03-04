import express from 'express';
import { connectDb } from './Database/dbConnection.js';
import router from './Routes/routes.js';

//todo

// connect database
//  design schema 
// add data 
// create routes for the same


const app = express();
app.use("/", router);
const PORT = 3000;

app.listen(3000 , ()=>{
    console.log("server started on port ", PORT);
})

connectDb();
