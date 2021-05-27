import { Router } from 'express';
const router = Router();

import { getStaffs, createStaffs, deleteStaffs, updateStaffs } from '../controllers/staffs.controller';

// /api/licenses
router.post('/', createStaffs);
router.get('/', getStaffs);
router.delete('/:staffID', deleteStaffs);
router.put('/:staffID', updateStaffs);

export default router;