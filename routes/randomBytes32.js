import express from 'express';
const router = express.Router();

router.get('/' , (req, res) => {
    res.send("BYTES 32");
});

export default router;