import { Router } from "express";
import { addFile, deleteFile, getFile } from "../controller/fileController";
import upload  from "../Helper/upload"

const router = Router()


router.get("/getFiles",getFile)
router.post("/uploadFiles",upload.single("picture"),addFile)
router.delete("/deletFile/:id",deleteFile)


export default router