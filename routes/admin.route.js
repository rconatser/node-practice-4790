import { Router } from 'express'

export const adminRouter = Router()

import { postAddProduct, getAllProducts, getProductById, postEditProduct, postDeleteProduct } from '../controllers/admin.controller'

adminRouter.post('/add-product', postAddProduct)

adminRouter.get('/getAllProducts', getAllProducts)

adminRouter.get('/getProduct/:productId', getProductById)

adminRouter.post('/edit-product', postEditProduct)

adminRouter.post('/delete-product/:productId', postDeleteProduct)