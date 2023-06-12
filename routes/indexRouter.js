 import express from 'express'
//  import userRoutes from './userRoutes.js'
 import productRoutes from './productRoutes.js'
 
 const router=express.Router()

 router.use('/products', productRoutes)
//  router.use('/users', userRoutes)

 export default router