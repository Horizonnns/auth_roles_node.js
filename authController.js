class authController {
	async authenticate(req, res) {
		try {
			res.json('auth working');
		} catch (e) {
			console.log(e, 'error');
		}
	}

	async login(req, res) {
		try {
			res.json('login working');
		} catch (e) {
			console.log(e, 'error');
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
