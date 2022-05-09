const Router = require('express');
const basketController = require('../controllers/basketController');
const router = new Router();

router.post('/', basketController.create);
router.get('/', basketController.getAllComicsByBasketId);
router.delete('/', basketController.deleteComics);
module.exports = router;
