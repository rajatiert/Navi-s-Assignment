import  express from "express";
import { getJobs  , createJobs } from "../Controller/jobController.js";

const router = express.Router();

router.get('/getJobs' , getJobs);
router.post('/addJob', createJobs);

export default router;