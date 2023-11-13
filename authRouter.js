const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');
const user = require('./models/User');

router.post(
	'/authenticate',
	[
		check(
			'username',
			'Имя пользователя не может быть пустым'
		).notEmpty(),
		check(
			'password',
			'Пароль должен быть больше 4 и меньше 10 символов'
		).isLength({ min: 4, max: 10 }),
	],
	controller.authenticate
);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router;
