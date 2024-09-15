import express from "express";
import isAuthenticated from "../middlewares/isAuthentication.js";
import {
  applyJob,
  getApplicants,
  getApplicationJobs,
  updateStatus,
} from "../controller/application.controller.js";
const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);
router.route("/get").get(isAuthenticated, getApplicationJobs);
router.route("/:id/applicant").get(isAuthenticated, getApplicants);
router.route("/status/:id/update").post(isAuthenticated, updateStatus);
export default router;
