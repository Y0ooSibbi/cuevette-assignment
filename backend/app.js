const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const groupRoutes = require('./routes/groupRoutes');
const noteRoutes = require('./routes/noteRoutes');
const config = require('./config');
const cors = require('cors');
const groupController = require('./controllers/groupController');
const Note = require('./models/Note');
const router = require('./routes/groupRoutes');
require('dotenv').config();

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json());
app.post('/api/getNotes', async (req, res) => {
    try {
        // Extract the group ID from the request body
        const { groupId } = req.body;
        // Fetch the notes for the specified group ID
        const notes = await Note.find({ groupId });
        console.log(notes);

        // Send the notes as the response
        res.json(notes);
    } catch (error) {
        // Handle errors
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
  });
app.use('/api/groups', groupRoutes);
app.use('/api/notes', noteRoutes);

const PORT = process.env.PORT || 3000;


if(process.env.NODE_ENV=='production'){
    console.log('hello');
    app.use(express.static("frontend/build"));
    const path =require('path');
    app.get("*", function (req, res) {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
      });
      app.listen(PORT, () => console.log(`Server s is running on port ${PORT}`));

}else{
    console.log("heee");
    app.listen(PORT, () => console.log(`Server s is running on port ${PORT}`));
}
