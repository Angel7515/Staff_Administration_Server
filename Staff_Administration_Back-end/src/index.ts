import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));

app.listen(port,() => {
    console.log(' |> Backend Server Listening From Port || ', port);
});