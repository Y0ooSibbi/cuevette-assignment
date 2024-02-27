const Group = require('../models/Group')

exports.createGroup = async (req, res) => {
    try {
        const group = await Group.create(req.body);
        res.status(201).json(group);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNotesByGroup = async (req, res) => {
    try {
        const groupId = req.params.groupId;
        // Fetch notes based on groupId from MongoDB
        // Example:
        // const notes = await Note.find({ groupId });
        // res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
