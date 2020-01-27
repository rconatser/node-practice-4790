import { Router } from 'express'

export const adminRouter = Router()

import { postAddProduct, getAllProducts } from '../controllers/admin.controller'

adminRouter.post('/add-product', postAddProduct)

adminRouter.get('/getAllProducts', getAllProducts)
