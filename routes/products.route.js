const express = require('express');
const router = express.Router();
const { getProducts, deleteProduct, getProductById, postProduct, putProduct } = require('../controllers/product.controller');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', postProduct);
router.put('/:id', putProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
