//ESM sintaxis
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req :Request, res: Response)=>{
    res.send("HOLA");
});

// const port = process.env.PORT || 4000;
app.listen(4000, ()=> {
    console.log("Server is running...");
});