import express from 'express';
import controller from '../controllers/Partner';

const router = express.Router();

router
    .post('/create', controller.createPartner)
    .get('/get/:id', controller.loadPartnerById)
    


export = router;