import { Router } from 'express';

import { getCategories, updateCategory, getProducts, createProduct, getProduct, updateProduct, deleteProduct } from '../controllers/productController';

const router = Router();

router.get('/', getProducts);

router.get('/categories', getCategories);

router.put('/categories/:id', updateCategory)

router.post('/', createProduct);

router.get('/:id', getProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;

