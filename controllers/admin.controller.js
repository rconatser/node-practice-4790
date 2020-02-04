import { Product } from '../models/product'
import mongodb from 'mongodb'
import { adminRouter } from '../routes/admin.route'

// create
export const postAddProduct = (req, res, next) => {
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const description = req.body.description
    const product = new Product(title, price, description, imageUrl)
    product.save()
    .then(result => {
        console.log('Created Product')
        res.send('Created Product! Check your DB')
        // res.redirect('/admin/products')
    })
}

// read all
export const getAllProducts = (req, res, next) => {
    Product.fetchAll()
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        console.log(err)
    })
}

// read one
export const getProductById = (req, res, next) => {
    const prodId = req.params.productId
    console.log(prodId)
    Product.findById(prodId)
        .then(product => {
            if (!product) {
                return res.redirect('/')
            }
            res.json(product)
        })
    .catch(err => console.log(err))
}

// update
export const postEditProduct = (req, res, next) => {
    const prodId = req.body.productId
    const updatedTitle = req.body.title
    const updatedPrice = req.body.price
    const updatedDesc = req.body.description
    const updatedImageUrl = req.body.imageUrl
    const product = new Product(updatedTitle, updatedPrice, updatedDesc, updatedImageUrl, new mongodb.ObjectId(prodId))
    product.save()
        .then(result => {
            console.log('Updated product')
            res.redirect('/admin/getAllProducts')
        })
    .catch(err => console.log(err))

}

// delete