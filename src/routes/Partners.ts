import express from 'express';
import createPartner from '../controllers/Partner';

const router = express.Router();

router.post('/create', createPartner);

export = router;