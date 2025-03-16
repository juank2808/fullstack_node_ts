import { Router } from 'express';

const router = Router();

router.post('/auth/register',(req, res) => {
    console.log('Registro...');
    res.send("registro...");
})

export default router;