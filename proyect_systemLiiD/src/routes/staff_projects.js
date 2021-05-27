import { Router } from 'express';
const router = Router();

import { getStaff_Projects, createStaff_Projects, deleteStaff_Projects, updateStaff_Projects } from '../controllers/staff_projects.controller';

// /api/staff_projects
router.post('/', createStaff_Projects);
router.get('/', getStaff_Projects);
router.delete('/:staff_ProjectID', deleteStaff_Projects);
router.put('/:staff_ProjectID', updateStaff_Projects);

export default router;