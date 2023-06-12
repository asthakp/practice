import express from 'express'
import { createProducts , getProducts,updateProducts,deleteProducts} from '../controller/product.controller.js'
const router= express.Router()

//to create products
router.post('/', createProducts)

// to get the created products
router.get('/', getProducts)

//to update the products
router.patch('/:id', updateProducts)

// //to delete products
router.delete('/:id', deleteProducts)

export default router