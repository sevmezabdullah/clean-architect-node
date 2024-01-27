import express from 'express';
const app = express();
app.use(express.json());
import 'reflect-metadata'



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});