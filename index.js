import  express  from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
import stringGenerate from './routes/getSrtring.js';
import getTime from './routes/getTime.js'
import bytes32 from './routes/randomBytes32.js'
import uint256 from './routes/randomUint256.js'

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/RString', stringGenerate); // generates String using UUID library
app.use('/Time', getTime); // get Current Clock
app.use('/RUint', uint256);  // get Random Uint256
app.use('/RBytes', bytes32); // get Random 32 Bytes

app.get('/',(req, res)=>{
    const a = uuidv4();
    res.send("get Request Reached");
});

app.listen(PORT,()=> console.log(`Server Running on port : http://localhost${PORT}`));