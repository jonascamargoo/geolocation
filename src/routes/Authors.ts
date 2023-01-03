import express from 'express';
import controller from '../controllers/Author';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router
    .post('/create', ValidateJoi(Schemas.author.create), controller.createAuthor)
    .get('/get/:authorId', controller.readAuthor)
    .get('/get', controller.readAll)
    .patch('/update/:authorId', ValidateJoi(Schemas.author.update), controller.updateAuthor)
    .delete('/delete/:authorId', controller.deleteAuthor)
    
export = router;