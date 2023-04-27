import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  deleteUser,

} from '../controllers/users.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/delete-user/:userId', deleteUser);

export default router;
