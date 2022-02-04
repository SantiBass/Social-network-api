const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
// target the specific route files
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// exporting all  route files
module.exports = router;