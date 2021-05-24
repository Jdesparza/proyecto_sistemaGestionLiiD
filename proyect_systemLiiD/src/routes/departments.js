import { Router } from 'express';
const router =Router();

import { getDepartments, createDepartments, deleteDepartments, updateDepartments } from '../controllers/departments.controller';

// /api/departments
router.post('/', createDepartments);
router.get('/', getDepartments);
router.delete('/:deptID', deleteDepartments);
router.put('/:deptID', updateDepartments);

export default router;