import { Router } from "express";
import multer from "multer";
import { importCsv } from "../controllers/import.controller";

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/", upload.single("file"), importCsv);

export default router;