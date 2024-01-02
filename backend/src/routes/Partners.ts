import express from 'express';
import controller from '../controllers/Partner';

const router = express.Router();

router
    .post('/create', controller.createPartner)
    .get('/get', controller.loadPartners)
    .get('/get/:id', controller.loadPartnerById)
    .get('/nearest', controller.searchNearestPartner)
    
export default router;