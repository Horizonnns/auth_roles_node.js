const Router = require('express');
const router = new Router();
const controller = require('./authController');

router.post(
	'/authenticate',
	controller.authenticate
);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router;
