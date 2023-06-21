import express from 'express';
const router = express.Router();

router.get('/' , (req, res) => {
    res.send("UINT 256");
});

export default router;