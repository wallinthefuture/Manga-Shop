const Router = require('express');
const pdfController = require('../controllers/pdfController');
const router = new Router();

const checkRole = require('../middleware/checkRoleMiddleware');

router.get('/', checkRole('ADMIN'), pdfController.create);

module.exports = router;
