const express = require('express');
const router = express.Router();
const { validateUserCreateDTO, validateUserLogInDTO, validateEmailDTO } = require('../controllers/validationController');

router.post('/validate-register', validateUserCreateDTO);
router.post('/validate-login', validateUserLogInDTO);
router.post('/validate-email', validateEmailDTO);

module.exports = router;

