const router = require('express').Router();

const { contactForm } = require('../controllers/controller.js')


/** HTTP Reqeust */
router.post('/send/message', contactForm);


module.exports = router;