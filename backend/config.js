const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yorsibbu:12345678910@cluster0.wrycp28.mongodb.net/cuevette', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB', err));

module.exports = mongoose;