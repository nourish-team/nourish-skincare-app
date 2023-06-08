import express, {Request, Response} from "express";
const router = express.Router();

// GET
router.get('/journal/:routineid', (req: Request, res: Response) => {
    res.send("send back journal per routine")
});
router.get('/product/:name', (req: Request, res: Response) => {
    res.send("send product by name")
});
router.get('/routine/:userid', (req: Request, res: Response) => {
    res.send("send routine by user id")
});
router.get('/routine/:skintype', (req: Request, res: Response) => {
    res.send("send routine by user id")
});


// POST req for login to post the 
router.post('/login', (req: Request, res: Response) => {
    res.send("post token in login")
})
router.post('/signup', (req: Request, res: Response) => {
    res.send("post username")
})
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