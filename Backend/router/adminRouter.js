import { Router } from "express";
import  { adminLogin } from "../controller/adminController.js";

const adminRouter = Router();

//post API
adminRouter.post("/adminlogin", adminLogin);


export default adminRouter;
