import { Router } from 'express';
const router = Router();

import { getLicenses, createLicenses, deleteLicenses, updateLicenses } from '../controllers/licenses.controller';

// /api/licenses
router.post('/', createLicenses);
router.get('/', getLicenses);
router.delete('/:licenseID', deleteLicenses);
router.put('/:licenseID', updateLicenses);

export default router;