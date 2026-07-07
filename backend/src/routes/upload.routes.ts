import { Router } from "express";
import multer from "multer";
import { uploadCsv } from "../controllers/upload.controller";

const router = Router();

// Store uploaded file in memory
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/", upload.single("file"), uploadCsv);

export default router;