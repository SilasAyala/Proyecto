import express from "express";

import { getRecycleByProductId } from "../controllers/recycle-controller.js";

const router = express.Router();

router.get('/product/:pid', getRecycleByProductId);

export default router;