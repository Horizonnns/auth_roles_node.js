const Router = require('express');
const router = new Router();

router.post('/authenticate');
router.post('/login');
router.get('/users');

module.exports = router;
