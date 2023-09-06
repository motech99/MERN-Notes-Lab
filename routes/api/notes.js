const express = require('express');
const router = express.Router();
const noteController = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', noteController.viewNotes) 
router.post('/new', noteController.create) 

module.exports = router;
