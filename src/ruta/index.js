const { Router } = require('express');
const router = Router();

const { welcome, getPersonalities } = require('../controllers/controllers.js')

router.get('/', welcome);
router.get('/personalities', getPersonalities);

module.exports = router;
