import { Request, Response, Router } from "express";
import { registerController } from "../controllers/auth.controller";

const router = Router();
// http://localhost:3002/auth/register
// router.post('/login', loginController);
router.post('/register', registerController );


export{ router }