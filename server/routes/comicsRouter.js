const Router = require('express');
const router = new Router();
const comicsController = require('../controllers/comicsController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), comicsController.create);
router.get('/', comicsController.getAll);
router.get('/:id', comicsController.getOne);
router.delete('/', checkRole('ADMIN'), comicsController.deleteComics);
module.exports = router;
