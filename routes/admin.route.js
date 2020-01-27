import { Router } from 'express'

export const router = Router()

import { postAddProduct } from '../controllers/admin.controller'

router.post('/add-product', postAddProduct)
