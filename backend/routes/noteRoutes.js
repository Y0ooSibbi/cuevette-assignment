const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const groupController = require('../controllers/groupController')

router.post('/notes', async (req, res) => {
    try {
        // Extract the group ID from the request body
        const { groupId } = req.body;
        console.log('hello');
        // Fetch the notes for the specified group ID
        const notes = await groupController.getNotesByGroup(groupId);

        // Send the notes as the response
        res.json(notes);
    } catch (error) {
        // Handle errors
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.post('/create', noteController.createNote);
// router.get('/notes', noteController.getNotesByGroup);
module.exports = router;
