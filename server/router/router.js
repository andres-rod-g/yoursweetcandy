import express from 'express'
import { getTags } from '../controllers/tagsControllers.js';
import { findCandy, getCandies, postCandy } from '../controllers/candyControllers.js';

const router = express.Router();

router.get('/candy', getCandies);
router.get('/tags', getTags);
router.get('/find', findCandy); 
router.post('/candy', postCandy);

export default router;