require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Item Manager API is running'));
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected');
    
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
