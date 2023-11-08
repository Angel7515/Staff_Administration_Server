import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// path to access get operations
import userRouter from './routes/usuario';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// access to server routes
app.use('/usuarios', userRouter);

app.listen(port,() => {
    console.log(' |> Backend Server Listening From Port || ', port);
});
