import {Router} from "express"

const router = Router();

router.get("/",(request,response) => {
    response.send("Jaofinv");
});

export default router;