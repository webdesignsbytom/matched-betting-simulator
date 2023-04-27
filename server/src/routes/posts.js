import { Router } from 'express';

import { getAllPosts } from '../controllers/posts.js';

import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';
import { deletePostById } from '../domain/posts.js';


const router = Router();

router.get('/', getAllPosts);
router.delete('/delete-user/:userId', deletePostById);

export default router;

