const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: '*' 
}));
app.use(express.json());


const contactRoutes = require('./routes/contact');
app.use('/api', contactRoutes);


app.get('/', (req, res) => {
  res.send('Server Running! Contact API Ready');
});


app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});