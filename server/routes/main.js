import express from 'express';
import { createCause } from '../controllers/cause';
const router = express.Router();
router.post('/causes', createCause);
//export default router;
import { getAllCause, getSingleCause, updateCause, deleteCause } from '../controllers/main';
import { createEventCause } from '../controllers/cause';

router.get('/cause/:causeId', getSingleCause);
router.patch('/cause/:causeId', updateCause);
router.delete('/cause/:causeId', deleteCause);
router.post('/events', createEventCause);
router.get('/events', getAllCause);
export default router;