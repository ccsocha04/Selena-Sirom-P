const express = require('express');
const indexController = require('../controllers/index');

const validator = require('../middlewares/validatorMiddleware');

const router = express.Router();


router.get('/', indexController.index);
router.post('/', validator.booking, indexController.createBooking);

module.exports = router;
