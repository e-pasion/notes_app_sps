import {Router} from 'express'
import { createNote, deleteNote, getNote, getNotes, updateNote } from "../controllers/note.controller.js";
const router = Router();

router.get('/notes',getNotes)
router.get('/notes/:id',getNote)
router.post('/notes',createNote)
router.put('/notes/:id',updateNote)
router.delete('/notes/:id',deleteNote)

export default router;