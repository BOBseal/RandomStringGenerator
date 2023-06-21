import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

router.get('/' , (req, res) => {
    const a = uuidv4();
    res.send(a);
});

export default router;


// contract : Goerli -- 0x38081aC195841074C428B80962FbDA003AE80313 --type HashGenerator

//funtionNames - 
//  generateBytes32( string , uint256) public returns(bytes32) 
//  generateUint256(string , uint256) public returns(uint256)


// add following - 1: clock or a timer , 2: contract interaction interface , nft check api (returns contract info such as owner , deployer , balances etc)
