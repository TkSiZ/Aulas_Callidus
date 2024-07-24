// Fibonacci 

const readline = require('readline');

// Cria uma interface para ler a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário para inserir o nome
rl.question('Escolha quantos numeros você deseja: ', (numero) => {
    let fibonacci = [1, 1];
    let contador = 0;
    qnt = parseInt(numero) - 1;
    for(let i = 2; i != numero; i++)
    {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[ i - 2];
    }

    while(contador != qnt)
    {
        process.stdout.write(fibonacci[contador]);
    }






    // Fecha a interface de leitura
    rl.close();
});
