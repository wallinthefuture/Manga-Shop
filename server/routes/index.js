const Router = require('express');
const router = new Router();
const comicsRouter = require('./comicsRouter');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const genresRouter = require('./genresRouter');
const basketRouter = require('./basketRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/genre', genresRouter);
router.use('/comics', comicsRouter);
router.use('/basket', basketRouter);
module.exports = router;
