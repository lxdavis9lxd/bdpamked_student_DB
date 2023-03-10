const express = require('express');
const checkAuth = require('../middleware/jwtVerify');
const controller = require('../controllers/SPKusers');
const bodyValidator = require("../middleware/bodyValidator");
const updateValidator = require("../middleware/updateValidator");
const createDto = require('../dto/SPKusers.dto');
const router = express.Router();

router.get('/', checkAuth, controller.getAll);
router.post('/', checkAuth, bodyValidator(createDto), controller.create);
router.get('/:username', checkAuth, controller.getOne);
router.patch('/:username', checkAuth, updateValidator(createDto), controller.update);
router.delete('/:username', checkAuth, controller.remove);
router.get('/search/:searchKey', checkAuth, controller.search);

module.exports = router;
