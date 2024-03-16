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
//os elementos com um traço, "-";
let letrasString = letras.join('-');

//Exibo das duas formas, como array e como string;
console.log(letras); //Saída: ['a', 'b', 'c']
console.log(letrasString); //Saída: a-b-c

//----------------Exemplo 2----------------
//Array com o nome das meninas da equipe como elementos;
let meninasDaEquipe = ['Mariana', 'Julia', 'Rayssa', 'Fernanda'];

//Uso o método para criar a string que separe os 
//nomes com virgula e espaço, ", ";
let meninasDaEquipeString = meninasDaEquipe.join(', ');

//E exibo como array e como string;
console.log(meninasDaEquipe); //Saída: ['Mariana', 'Julia', 'Rayssa', 'Fernanda']
console.log(meninasDaEquipeString); //Saída: Mariana, Julia, Rayssa, Fernanda

    //Método .indexOf()
//Este procura pelo elemento dentro de um array e
//se encontrar retorna com a posição/index em que o elemento está,
//se não encontrar retorna com "-1".

//----------------Exemplo 1----------------
//Gero um array com letras;
let letra = ['a', 'b', 'c', 'd'];

//Utilizo do método para descobrir em que posição/
//index a letra 'd' está;
let posicao = letra.indexOf('d')

//Exibo essa posição;
console.log(posicao); //Saída: 3

//----------------Exemplo 2----------------
//Gero array com números;
let frase = ['1', '2', '3'];

//Utilizo do método para descobrir em que posição/
//index o número '4' que não se encontra no array está;
let index = frase.indexOf('4');

//Como o número '4' não existe no array a posição 
//vai ser '-1';
console.log(index); //Saída: -1

    //Método .includes()
//O .includes() verifica se um elemento escolhido está incluso 
//no array, se sim a saída é 'true' e se não 'false'.

//----------------Exemplo 1----------------
//Crio o array com as vogais;
let vogais = ['a', 'e', 'i', 'o', 'u'];

//E verifico se a vogal escolhida 'i' está inclusa no array;
let verificacao = vogais.includes('i');

//O resultado é a resposta, que é verdadeiro que tem o 'i' no array;
console.log(verificacao); //Saída: true

//----------------Exemplo 2----------------
//Crio array com os números ímpares;
let numerosImpares = ['1', '3', '5', '7', '9'];

//E examino se o número que quero procurar está no array;
let trueOrFalse = numerosImpares.includes('2');

//A resposta é false, falso, pois 2 é par e não está na lista de ímpares;
console.log(trueOrFalse); //Saída: false


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