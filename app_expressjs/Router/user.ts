import { Router } from "express";
import usersController from "../Controller/usersController";
 
const router = Router();

// Exibe a tela de login e recebe os dados enviados pelo formulario.
router.get("/", usersController.login);
router.post("/", usersController.checkLogin);

export default router;  