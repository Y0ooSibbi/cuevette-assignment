const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.post('/create', groupController.createGroup);
router.get('/:groupId/notes', groupController.getNotesByGroup);

module.exports = router;
