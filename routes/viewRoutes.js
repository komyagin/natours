const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.get('/', viewController.getOverview);
router.get('/tour/:slug', viewController.getTour);

router.get('/login', viewController.getLogin);
router.get('/me', authController.protect, viewController.getAccount);

module.exports = router;
