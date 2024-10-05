import express from "express";
import { services } from "../constants.js";
const router = express.Router()
router.get("/",(req,res)=>{
  res.status(200).send(services)
})
export default router