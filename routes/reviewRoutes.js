const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, reviewController.getAllReviews)
  .post(authController.protect, reviewController.addNewReview);

router
  .route('/:id')
  .get(authController.protect, reviewController.getAllReviewForTour);

module.exports = router;
