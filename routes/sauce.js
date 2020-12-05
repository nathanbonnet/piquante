const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer-config');
const likingAlgo = require('../middlewares/likingSystem')

const sauceController = require('../controllers/sauce');

router.post('/', auth, multer, sauceController.createSauce);
router.get('/', auth, sauceController.getAllSauces);
router.get('/:id', auth, sauceController.getOneSauce);
router.post('/:id/like', auth, likingAlgo, sauceController.likeOneSauce);
router.put('/:id', auth, sauceController.modifyOneSauce);
router.delete('/:id', auth, sauceController.deleteSauce);


module.exports = router;