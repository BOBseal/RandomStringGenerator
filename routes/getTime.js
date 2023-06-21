import express from 'express';
const router = express.Router();

router.get('/' , (req, res) => {
    res.send("999");
});

export default router;