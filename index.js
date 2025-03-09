import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.get('/Ping',(req,res)=>{
    res.json({message:"Pong..."});
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

