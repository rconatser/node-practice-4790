import { Product } from '../models/product'

export const postAddProduct = (req, res, next) => {
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const description = req.body.description
    const product = new Product(title, price, description, imageUrl)
    product.save()
    .then(result => {
        console.log('Created Product')
        res.redirect('/admin/products')
    })
    .catch((err) => {
        console.error(err)
    })
}