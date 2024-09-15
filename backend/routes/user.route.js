import express from "express";
import { home, login, logout, register, updateProfile } from "../controller/user.controller.js";
import isAuthenticated from "../middlewares/isAuthentication.js";
import { singleUpload } from "../middlewares/multer.js";
const router=express.Router();

router.route("/").get(home)
router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);
export default router;