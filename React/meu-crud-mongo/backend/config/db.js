const mongoose = require('mongoose');

 // Set up default mongoose connection 
 const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/biblioteca');
        console.log('MongoDB conected...');
    }catch(err){
        console.error("Erro ao conectar ao MongoDB:", err.message);
        process.exit(1); // encerra o processo em caso de falha na conexão
    }
 };

 module.exports = connectDB;