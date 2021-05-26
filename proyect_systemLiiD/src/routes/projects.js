import { Router } from 'express';
const router = Router();

import { getProjects, createProjects, deleteProjects, updateProjects } from '../controllers/projects.controller';

// /api/projects
router.post('/', createProjects);
router.get('/', getProjects);
router.delete('/:projectID', deleteProjects);
router.put('/:projectID', updateProjects);

export default router;