
import express from "express";
import UsersManager from "../UsersManager.js";

import {getUsers, getUserById, addUser, updateUser, deleteUser} from "../controllers/userController.js";

const router = express.Router();
const userModel = new UsersManager();

// Rutas para los usuarios
router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', addUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router;