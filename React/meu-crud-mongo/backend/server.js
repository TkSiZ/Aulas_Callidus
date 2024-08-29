const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const livrosRoutes = require('./routes/livrosRoutes');

// conecta ao banco de dados MongoDB

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', livrosRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});