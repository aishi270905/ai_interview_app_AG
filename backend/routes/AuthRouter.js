import express from "express";
//import { signUpValidation } from "../Middlewares/AuthValidation.js";
import {signup, login, logout} from "../controllers/AuthControllers.js";


const router = express.Router();


router.post('/login',login);



router.post('/signup', signup);

router.get('/logout', logout);

export default router;