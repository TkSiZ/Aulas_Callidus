// questoes 10, 12, 16, 17, 19, 20, 30

const readline = require('readline');

// Cria uma interface para ler a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário para inserir o nome
rl.question('NUMERO: ', (nome) => {
  let contador = nome.length - 1;  // Ajustar o contador para a posição correta
  let listaSaida = [];
  let contadorSaida = 0;
  let rodando = true;

  while (rodando) {
    listaSaida[contadorSaida] = nome[contador];  // Corrigir para usar nome
    contador -= 1;
    contadorSaida += 1;
    if (contador < 0) {
      rodando = false;
    }
  }

  let saida = listaSaida.join('');
  console.log(saida);

  // Fecha a interface de leitura
  rl.close();
});




        