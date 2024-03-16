//Exercicio Array

    //Método .reverse()
//Esse método tem a função de inverter a ordem dos elementos, 
//alterando o primeiro array.

//----------------Exemplo 1----------------
//Declaro elementos, no caso as cores;
let cores = ['roxo', 'branco', 'preto'];

//Exibo para que na próxima etapa eu inverta a ordem;
console.log(cores); //Saída: ['roxo', 'branco', 'preto']

//Utilizo o método .reverse() para inverter a ordem
//dos elementos declarados;
let coresEmReverso = cores.reverse();

//Exibo o resultado com o método aplicado;
console.log(coresEmReverso); //Saída: ['preto', 'branco', 'roxo']

//----------------Exemplo 2----------------
//Declaro elementos iniciais;
let pets = ['calopsita', 'cachorro', 'gato', 'porquinho da india'];

//Exibo para que na próxima etapa eu inverta a ordem;
console.log(pets); //Saída: ['calopsita', 'cachorro', 'gato', 'porquinho da india']

//Uso o método .reverse() para inverter a ordem;
let petsInvertidos = pets.reverse();

//Exibo a ordem invertida;
console.log(petsInvertidos); //Saída: ['porquinho da india', 'gato', 'cachorro', 'calopsita']

    //Método .concat()
//Este método permite juntar arrays e retornar um novo.

//----------------Exemplo 1----------------
//Crio o meu array, a minha lista;
let listaNumeros = [1, 2, 3];
//Crio um novo array com o método para adicionar mais números a essa lista;
let novaListaNumeros = listaNumeros.concat([4, 5, 6]);

//Exibo a lista inicial e a final atualizada;
console.log(listaNumeros); //Saída: [1, 2, 3]
console.log(novaListaNumeros); //Saída: [1, 2, 3, 4, 5, 6]

//----------------Exemplo 2----------------
//Crio o array, uma lista de frutas
let frutasVitaminaC = ['acerola', 'laranja', 'limão'];
//Novo array utilizando o método para colocar mais frutas;
let novasFrutasVitamicaC = frutasVitaminaC.concat(['abacaxi', 'caju', 'morango']);

//Exibo a lista original e a final
console.log(frutasVitaminaC); //Saída: ['acerola', 'laranja', 'limão']
console.log(novasFrutasVitamicaC); //Saída: ['acerola', 'laranja', 'limão', 'abacaxi', 'caju', 'morango']

    //Método .join()
//O .join() cria uma string através do array, ou 
//junta os elementos do array em uma string.

//----------------Exemplo 1----------------
//Crio um array com as letras sendo os elementos;
let letras = ['a', 'b', 'c'];

//Utilizo o método para criar uma string que separe
// os elementos com um traço, "-";
let letrasString = letras.join('-');

//Exibo das duas formas, como array e como string;
console.log(letras); //Saída: ['a', 'b', 'c']
console.log(letrasString); //Saída: a-b-c

//----------------Exemplo 2----------------
//Array com o nome das meninas da equipe com elementos;
let meninasDaEquipe = ['Mariana', 'Julia', 'Rayssa', 'Fernanda'];

//Uso o método para criar a string que separe os 
//nomes com virgula e espaço, ", ";
let meninasDaEquipeString = meninasDaEquipe.join(', ');

//E exibo como array e como string;
console.log(meninasDaEquipe);
console.log(meninasDaEquipeString);

    //Método .indexOf()
//

    //Método .includes()
//

    //Método .forEach()
//

    //Método .filter()
//

    // Método .lastIndex()
//

    //Método .reduce()
//

    //Método .slice()
//



    //Método .splice()
//