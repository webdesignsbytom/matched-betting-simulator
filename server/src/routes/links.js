import { Router } from 'express';

import {
    getAllLinks,
    createNewLink
} from '../controllers/links.js'

const router = Router();

router.get('/', getAllLinks);
router.post('/', createNewLink);

export default router;
