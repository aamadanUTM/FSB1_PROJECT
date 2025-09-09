import express from 'express';
import {
    getAllUsers,
getUserById,
insertUser,
updateUser,
deleteUser
} from '../controllers/UserAuthControllers.js';

const router = express.Router();
// Get all users
router.get('/', getAllUsers);
// Get user by id
router.get('/:id', getUserById);
// Insert new user
router.post('/save_user', insertUser);
// Update user by id
router.put('/update_user/:id', updateUser);
// Delete user by id
router.delete('/delete_user/:id', deleteUser);

export default router;