const express = require('express');
const { check } = require('express-validator');

const checkAuth = require('../middleware/check-auth');

const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);

//manejo de autorizacion por tokens
router.use(checkAuth);

router.post(
  '/',
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address')
      .not()
      .isEmpty()
  ],
  placesControllers.createPlace
);

router.patch(
  '/:pid',
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })
  ],
  placesControllers.updatePlace
);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;