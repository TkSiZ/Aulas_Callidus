const fs = require('fs');

const folderName = './aulafinal/testeDeCriacao';

try{
    if(!fs.existsSync(folderName))
    {
        fs.mkdirSync(folderName);
        console.log('Diretório criado com sucesso!');
    }
}catch(err){
    console.log(err);
}