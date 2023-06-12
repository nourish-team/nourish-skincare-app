import express, {Request, Response} from "express";

const router = express.Router();

import signupController from '../controller/signup.controller';
import loginController from "../controller/login.controller";
import productController from "../controller/product.controller";
import routineController from "../controller/routine.controller";
import journalController from "../controller/journal.controller";
import likesController from "../controller/likes.controller";

// SIGNUP
router.post('/signup', signupController.createUser);

// LOGIN
router.patch('/login/session/:id', loginController.updateAccessTokenLogin);
router.post('/login/user', loginController.getUserData);

//PRODUCTS
router.get('/product/:brand', productController.getProductByName);
router.get('/product/id/:id', productController.getProductById);

// ROUTINE
router.post('/routine/create', routineController.createRoutine);
router.get('/routine/skintype/:type', routineController.getRoutineBySkintype);
router.get('/routine/user/:id', routineController.getRoutineByUserId);


// JOURNAL
router.post('/journal/routine', journalController.createJournalRoutine);
// /journal/routine/user/?userid=1&routineid=1
router.get('/journal/routine/user/', journalController.getJournalData);


// LIKES
router.post('/like/routine',  likesController.createLike)

// PATCH 
router.patch('/routine', (req: Request, res: Response) => {
    res.send("add products to routine")
})

// DELETE
router.delete('/routine', (req: Request, res: Response) => {
    res.send("add products to routine")
})

export default router;