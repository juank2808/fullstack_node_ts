import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send("HELLO GET");
});
router.get('/our', (req, res) => {
    res.send("HELLO OUR");
});
router.get('/blog', (req, res) => {
    res.send("HELLO BLOG");
});

export default router;