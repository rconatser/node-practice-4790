import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
})

export const Product = mongoose.model('Product', productSchema)

/* import { getDb } from '../util/database'

export class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
    }

    save() {
        const db = getDb()
        return db
        .collection('products')
        .insertOne(this)
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static fetchAll() {
        const db = getDb()
        return db
        .collection('products')
        .find()
        .toArray()
        .then(products => {
            console.log(products)
            return products
        })
        .catch(err => {
            console.log(err)
        })
    }
} */