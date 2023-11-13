const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcryptjs');

class authController {
	async authenticate(req, res) {
		try {
			const { username, password } = req.body;
			const candidate = await User.findOne({
				username,
			});
			if (candidate) {
				return res.status(400).json({
					message:
						'Пользователь с таким именем уже существует',
				});
			}
			const hashPassword = bcrypt.hashSync(
				password,
				7
			);
			const userRole = await Role.findOne({
				value: 'USER',
			});
			const user = new User({
				username,
				password: hashPassword,
				roles: [userRole.value],
			});
			await user.save();
			return res.json({
				message:
					'Пользователь успешно зарегистрирован',
			});
		} catch (e) {
			console.log(e, 'error');
			res.status(400).json({
				message: 'Registration error',
			});
		}
	}

	async login(req, res) {
		try {
			res.json('login working');
		} catch (e) {
			console.log(e, 'error');
			res.status(400).json({
				message: 'Login error',
			});
		}
	}

	async getUsers(req, res) {
		try {
			res.json('getUsers working');
		} catch (e) {
			console.log(e, 'error');
		}
	}
}

module.exports = new authController();
