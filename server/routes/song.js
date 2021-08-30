const express = require('express');
const router = express.Router();
const songController = require('../controllers/SongController');

router.post('/song', songController.store);
router.get('/songs', songController.getAll);
router.get('/song/:id', songController.get);
router.put('/song/:id', songController.update);
router.delete('/song/:id', songController.remove);

module.exports = router;