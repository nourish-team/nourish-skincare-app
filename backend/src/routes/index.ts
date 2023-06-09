import express, {Request, Response} from "express";
import controllerSignup from '../controller/signup.controller'
const router = express.Router();

// GET
router.get('/journal/:routineId', (req: Request, res: Response) => {
    res.send("send back journal per routine")
});
router.get('/product/:name', (req: Request, res: Response) => {
    res.send("send product by name")
});
router.get('/routine/:userId', (req: Request, res: Response) => {
    res.send("send routine by user id")
});
router.get('/routine/:skinType', (req: Request, res: Response) => {
    res.send("send routine by user id")
});


// POST req for login to post the 
router.post('/login/session', (req: Request, res: Response) => {
    res.send("post token in login")
})
router.post('/signup', controllerSignup.createUser)

router.post('/journal',  (req: Request, res: Response) => {
    res.send("post journal enteries")
})
router.post('/like',  (req: Request, res: Response) => {
    res.send("post like")
})

// PATCH 
router.patch('/login', (req: Request, res: Response) => {
    res.send("patch token in login")
})
router.patch('/routine', (req: Request, res: Response) => {
    res.send("add products to routine")
})

// DELETE
router.delete('/routine', (req: Request, res: Response) => {
    res.send("add products to routine")
})

export default router;