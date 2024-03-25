const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes); // Mount category routes at /api/categories
router.use('/products', productRoutes); // Mount product routes at /api/products
router.use('/tags', tagRoutes); // Mount tag routes at /api/tags

module.exports = router;
