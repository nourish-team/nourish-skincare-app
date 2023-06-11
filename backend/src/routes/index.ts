import express, {Request, Response} from "express";

const router = express.Router();

import signupController from '../controller/signup.controller';
import loginController from "../controller/login.controller";
import productController from "../controller/product.controller";
import routineController from "../controller/routine.controller";

// SIGNUP
router.post('/signup', signupController.createUser);

// LOGIN
router.patch('/login/session/:id', loginController.updateAccessTokenLogin);

//PRODUCTS
router.get('/product/:brand', productController.getProductByName);
router.get('/product/id/:id', productController.getProductById);

// ROUTINE
router.post('/routine/create', routineController.createRoutine);
router.get('/routine/:userId', (req: Request, res: Response) => {
    res.send("send routine by user id")
});

router.get('/routine/:skinType', (req: Request, res: Response) => {
    res.send("send routine by user id")
});

// GET
router.get('/journal/:routineId', (req: Request, res: Response) => {
    res.send("send back journal per routine")
});



// POST req for login to post the 


router.post('/journal',  (req: Request, res: Response) => {
    res.send("post journal enteries")
})
router.post('/like',  (req: Request, res: Response) => {
    res.send("post like")
})

// PATCH 
router.patch('/routine', (req: Request, res: Response) => {
    res.send("add products to routine")
})

// DELETE
router.delete('/routine', (req: Request, res: Response) => {
    res.send("add products to routine")
})

export default router;