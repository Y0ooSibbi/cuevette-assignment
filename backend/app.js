const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const groupRoutes = require('./routes/groupRoutes');
const noteRoutes = require('./routes/noteRoutes');
const config = require('./config');

app.use(bodyParser.json());

app.use('/api/groups', groupRoutes);
app.use('/api/notes', noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
