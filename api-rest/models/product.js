'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    sku: String,
    name: String,
    quantity: Number,
    price: { type: Number, default: 0 },
})

module.exports = mongoose.model('Product', ProductSchema)
