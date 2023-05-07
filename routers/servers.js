import { Router } from "express";
import { getCards, getFullCard } from "../controllers/servers.js";
const router = Router();

router.get('/api/main', getCards)
router.get('/api/analytics*', getFullCard)

export default router

