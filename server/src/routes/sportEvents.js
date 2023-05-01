import { Router } from 'express';

import { getAllSportEvents, getSportEventsByType } from '../controllers/sportEvents.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';


const router = Router();

router.get('/', getAllSportEvents);
router.get('/:type', getSportEventsByType);

export default router;

