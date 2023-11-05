const Tour = require('../models/tourModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getCheckoutSession = (req, res, next) => {
  // Get the currently booked tour
  // Create checkout session
  // Create session as response
};
