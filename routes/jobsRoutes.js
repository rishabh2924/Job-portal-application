import express from "express"
import userAuth from "../middlewares/authMiddleware.js";
import { createJobController, deleteJobController, getAllJobsController, updateJobsController } from "../controllers/jobController.js";

const router=express.Router();

//CREATE JOB || POST
router.post('/create-job',userAuth,createJobController)

//GET JOBS || GET
router.get('/get-jobs',userAuth,getAllJobsController)

//UPDATE JOBS || PUT || PATCH
router.patch('/update-job/:id',userAuth,updateJobsController)

//DELETE JOBS || DELETE
router.delete('/delete-job/:id',userAuth,deleteJobController)

export default router