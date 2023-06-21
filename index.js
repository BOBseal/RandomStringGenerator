import  express  from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
import userRoutes from './routes/getRandomString.js';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/getRandomString', userRoutes);

app.get('/',(req, res)=>{
    const a = uuidv4();
    res.send(a);
});

app.listen(PORT,()=> console.log(`Server Running on port : http://localhost${PORT}`));