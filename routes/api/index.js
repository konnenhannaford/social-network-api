const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const thoughtRoutes = require('./thoughtRoutes.js');
// const apiRoutes = require('./api');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
// router.use('/api', apiRoutes);

module.exports = router;