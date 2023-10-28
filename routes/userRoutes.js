import expres from "express"
import userAuth from "../middlewares/authMiddleware.js";
import { updateUserController } from "../controllers/userController.js";

//router object
const router=expres.Router();

//routes
//GET || USER

//UPDATE USER || PUT
router.put('/update-user',userAuth,updateUserController)






export default router