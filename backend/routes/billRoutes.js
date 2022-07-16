import express from 'express';
import { deleteBill, getAllBills, getOneBill, postBill, putEditBill } from '../controller/Electricitybill.js';

const router = express.Router()

router.get('/',getAllBills)
router.get('/:id',getOneBill)
router.post('/',postBill)
router.put('/:id/edit',putEditBill)
router.delete('/delete/:id',deleteBill)

export default router