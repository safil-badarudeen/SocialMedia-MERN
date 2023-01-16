const express = require("express");
const router = express.Router();
const {forgotPassword, resetPassword} = require('../controllers/accountController')

router.post('/forgot/password',forgotPassword);
router.put ('/reset/password',resetPassword);


module.exports = router;
