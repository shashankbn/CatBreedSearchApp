const express = require('express');
const logger = require('simple-node-logger').createSimpleLogger();
const { validateRequest } = require('../middlewares/requestValidator');
const { CatBreedRoutes } = require('./CatBreedRoutes');

const router = express.Router();

router.get('/catbreeds/topfive', validateRequest,
    async (req, res) => CatBreedRoutes({ logger }).getTopFiveCatBreeds(req, res));

module.exports = router;
