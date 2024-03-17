//Exercicio Array



//Método .reverse()
//Esse método tem a função de inverter a ordem dos elementos, 
//alterando o primeiro array.

//----------------Exemplo 1----------------
//Declaro elementos, no caso as cores;
let colors = ['roxo', 'branco', 'preto'];

//Exibo para que na próxima etapa eu inverta a ordem;
console.log(colors); //Saída: ['roxo', 'branco', 'preto']

//Utilizo o método .reverse() para inverter a ordem
//dos elementos declarados;
let colorsInReverse = colors.reverse();

//Exibo o resultado com o método aplicado;
console.log(colorsInReverse); //Saída: ['preto', 'branco', 'roxo']

//----------------Exemplo 2----------------
//Declaro elementos iniciais;
let pets = ['calopsita', 'cachorro', 'gato', 'porquinho da india'];

//Exibo para que na próxima etapa eu inverta a ordem;
console.log(pets); //Saída: ['calopsita', 'cachorro', 'gato', 'porquinho da india']

//Uso o método .reverse() para inverter a ordem;
let invertedPets = pets.reverse();

//Exibo a ordem invertida;
console.log(invertedPets); //Saída: ['porquinho da india', 'gato', 'cachorro', 'calopsita']



//Método .concat()
//Este método permite juntar arrays e retornar um novo.

//----------------Exemplo 1----------------
//Crio o meu array, a minha lista;
let listOfNumbers = [1, 2, 3];
//Crio um novo array com o método para adicionar mais números a essa lista;
let newListOfNumbers = listOfNumbers.concat([4, 5, 6]);

//Exibo a lista inicial e a final atualizada;
console.log(listOfNumbers); //Saída: [1, 2, 3]
console.log(newListOfNumbers); //Saída: [1, 2, 3, 4, 5, 6]

//----------------Exemplo 2----------------
//Crio o array, uma lista de frutas
let fruitsVitaminC = ['acerola', 'laranja', 'limão'];
//Novo array utilizando o método para colocar mais frutas;
let newFruitsVitaminC = fruitsVitaminC.concat(['abacaxi', 'caju', 'morango']);

//Exibo a lista original e a final
console.log(fruitsVitaminC); //Saída: ['acerola', 'laranja', 'limão']
console.log(newFruitsVitaminC); //Saída: ['acerola', 'laranja', 'limão', 'abacaxi', 'caju', 'morango']



//Método .join()
//O .join() cria uma string através do array, ou 
//junta os elementos do array em uma string.

//----------------Exemplo 1----------------
//Crio um array com as letras sendo os elementos;
let letters = ['a', 'b', 'c'];

//Utilizo o método para criar uma string que separe
//os elementos com um traço, "-";
let lettersString = letters.join('-');

//Exibo das duas formas, como array e como string;
console.log(letters); //Saída: ['a', 'b', 'c']
console.log(lettersString); //Saída: a-b-c

//----------------Exemplo 2----------------
//Array com o nome das meninas da equipe como elementos;
let teamGirls = ['Mariana', 'Julia', 'Rayssa', 'Fernanda'];

//Uso o método para criar a string que separe os 
//nomes com virgula e espaço, ", ";
let teamGirlsString = teamGirls.join(', ');

//E exibo como array e como string;
console.log(teamGirls); //Saída: ['Mariana', 'Julia', 'Rayssa', 'Fernanda']
console.log(teamGirlsString); //Saída: Mariana, Julia, Rayssa, Fernanda



//Método .indexOf()
//Este procura pelo elemento dentro de um array e
//se encontrar retorna com a posição/index em que o elemento está,
//se não encontrar retorna com "-1".

//----------------Exemplo 1----------------
//Gero um array com letras;
let lettersList = ['a', 'b', 'c', 'd'];

//Utilizo do método para descobrir em que posição/
//index a letra 'd' está;
let position = lettersList.indexOf('d')

//Exibo essa posição;
console.log(position); //Saída: 3

//----------------Exemplo 2----------------
//Gero array com números;
let numbers = ['1', '2', '3'];

//Utilizo do método para descobrir em que posição/
//index o número '4' que não se encontra no array está;
let index = numbers.indexOf('4');

//Como o número '4' não existe no array a posição 
//vai ser '-1';
console.log(index); //Saída: -1



//Método .includes()
//O .includes() verifica se um elemento escolhido está incluso 
//no array, se sim a saída é 'true' e se não 'false'.

//----------------Exemplo 1----------------
//Crio o array com as vogais;
let vowels = ['a', 'e', 'i', 'o', 'u'];

//E verifico se a vogal escolhida 'i' está inclusa no array;
let verification = vowels.includes('i');

//O resultado é a resposta, que é verdadeiro que tem o 'i' no array;
console.log(verification); //Saída: true

//----------------Exemplo 2----------------
//Crio array com os números ímpares;
let oddNumbers = ['1', '3', '5', '7', '9'];

//E examino se o número que quero procurar está no array;
let analysis = oddNumbers.includes('2');

//A resposta é false, falso, pois 2 é par e não está na lista de ímpares;
console.log(analysis); //Saída: false



//Método .forEach()
//Este método nos permite percorrer o array um por um e realiza
//uma ação para cada elemento.

//----------------Exemplo 1----------------
//Crio um array com estados do Sudeste;
let southeasternStates = ['Sao Paulo', 'Minas Gerais', 'Espirito Santo', 'Rio de Janeiro'];
//O .forEach é usado para percorrer pelos elementos e precisa de uma função como 
//argumento. Função essa com o nome de 'função de callback' que é chamada
//para cada elemento. O código dentro da função será executado quatro vez, um para cada estado;
southeasternStates.forEach(function (southeasternStates) {
    //Exibo o resultado do código;
    console.log(southeasternStates);
    //Saída: Sao Paulo
    //Minas Gerais
    //Espirito Santo
    //Rio de Janeiro
})

//----------------Exemplo 2----------------
//Crio um array com doces
let sweets = ['bolo', 'sorvete', 'chocolate', 'brigadeiro'];
//Uso o método .forEach para percorrer pelos elementos e executar a função;
sweets.forEach(function (sweets) {
    //Exibo o resultado do código;
    console.log(sweets)
    //Saída: bolo
    //sorvete
    //chocolate
    //brigadeiro
})



//Método .filter()
//Como o próprio nome diz, é um método usado para filtrar os elementos de um array.

//----------------Exemplo 1----------------
//Crio um array de nomes;
let names = [
    'Alejandra',
    'Bruna',
    'Beatriz',
    'Bento',
    'Camila',
    'Carol',
    'Daniel'
]

//Com o método, eu vou filtar o array com os nomes e passar uma função á ele.
//Neste caso eu quero filtrar os nomes que começem com (startsWith) a letra 'B';
let filteredNames = names.filter((n) => n.startsWith('B'));
//Exibo os nomes filtrados;
console.log(filteredNames); //Saída: ['Bruna', 'Beatriz', 'Bento']

//----------------Exemplo 2----------------
//Crio um array de tipos de animais vertebrados e os animais;
let vertebrates = [
    { type: 'mamifero', animal: 'onça' },
    { type: 'mamifero', animal: 'vaca' },
    { type: 'reptil', animal: 'serpente' },
    { type: 'reptil', animal: 'jacare' },
    { type: 'reptil', animal: 'tartaruga' },
    { type: 'ave', animal: 'galinha' }
]
//Nesse método se espera que o retono seja dos nomes dos animais que o tipo seja
//reptil. Então do array de vertebrados que eu criei vai filtrar aqueles que o 
//type (tipo) for igual a réptil;
let filteredVertebrates = vertebrates.filter((a) => a.type == 'reptil');
//Exibo o tipo com os animas filtrados;
console.log(filteredVertebrates);
//Saída:  { type: 'reptil', animal: 'serpente'},
//{ type: 'reptil', animal: 'jacare'},
//{ type: 'reptil', animal: 'tartaruga'}



//Método .some()
//Permite verificar se pelo o menos um elemento satifaz a condição.

//----------------Exemplo 1----------------
//Crio um array de tipos de alimentos orgânicos com nomes de alimentos;
let organics = [
    { type: 'fruta', food: 'mamao' },
    { type: 'fruta', food: 'pera' },
    { type: 'verdura', food: 'brocolis' },
    { type: 'legume', food: 'cenoura' },
    { type: 'fruta', food: 'uva' },
    { type: 'verdura', food: 'couve' }
]
//Nesta linha nós verificamos se pelo menos um dos elementos se encaixa na condição
//que é: o tipo tem que ser igual a 'fruta'. Condição verdadeira;
let verifiedOrganics = organics.some((f) => f.type == 'fruta');
//Exibo o resultado da verificação;
console.log(verifiedOrganics); //Saída: true

//----------------Exemplo 2----------------
//Crio um array de nomes e quanto de mesada esses nomes ganham;
let pocketmoney = [
    { name: 'Maria', pocketmoney: 200 },
    { name: 'Eduarda', pocketmoney: 150 },
    { name: 'Gabriel', pocketmoney: 180 },
    { name: 'Daniela', pocketmoney: 120 },
    { name: 'Fatima', pocketmoney: 250 },
    { name: 'Mayara', pocketmoney: 220 }
]
//Nesta linha eu crio uma variável com uma função que verifica se pelo menos um elemento,
//no caso a mesada (pocketmoney), é menor que 100. Função falsa;
let verifiedPocketMoney = pocketmoney.some((m) => m.pocketmoney < 100);
//Exibo o resultado da verificação;
console.log(verifiedPocketMoney); //Saída: false



//Método .slice()
//Retorna uma cópia do array especificada de duas formas: Onde deve começar 
//e Onde deve terminar/cortar o array;

//----------------Exemplo 1----------------
//Crio um array com letras;
let array = ['a', 'b', 'c', 'd', 'e'];
//Usando o .slice(), nós criamos uma cópia do array que começa a partir da posição 2;
let newArray = array.slice(2);
//Exibo o array original e a cópia;
console.log(array); //Saída: ['a', 'b', 'c', 'd', 'e']
console.log(newArray); //Saída: ['c', 'd', 'e']

//----------------Exemplo 2----------------
//Crio um array com letras;
let list = ['a', 'b', 'c', 'd', 'e'];
//Usando o .slice(), criamos uma cópia do array onde o número antes
//da vírgula é de onde queremos começar e o número depois onde queremos cortar o array;
let newList = list.slice(1, 4);
//Exibo o original e a cópia;
console.log(list); //Saída: ['a', 'b', 'c', 'd', 'e']
console.log(newList); //Saída: ['b', 'c', 'd']



//Método .find()
//Busca e retorna o primeiro elemento dentro da array que satifazer a condição.

//----------------Exemplo 1----------------
//Crio um array com sabores de bolo;
let cakes = [
    'chocolate',
    'limao',
    'laranja',
    'coco',
    'milho'
];
//Com o método, eu vou buscar no array o primeiro sabor de bolo que comece com a letra 'l';
let foundCakes = cakes.find(c => c.startsWith('l'));
//Exibo o primeiro resultado encontrado;
console.log(foundCakes); //Saída: limao

//----------------Exemplo 2----------------
//Crio um array com pets que conheço;
let petsThatIKnow = [
    { name: 'kito', animal: 'calopsita' },
    { name: 'jade', animal: 'porquinho da india' },
    { name: 'chico', animal: 'gato' },
    { name: 'lilica', animal: 'gato' },
    { name: 'ruginha', animal: 'tartaruga' }
]
//Com o método, eu vou buscar no array na parte dos animais por gato;
let foundPet = petsThatIKnow.find(pet => pet.animal == 'gato');
//Exibo o primeiro resultado encontrado;
console.log(foundPet);



//Método .splice()
//Permite adicionar, remover ou substituir elementos em qualquer posição do array.

//----------------Exemplo 1 - Remover----------------
//Crio um array com nomes;
let myGroup = [
    'Alejandra',
    'Fernanda',
    'Bruna',
    'Samuel',
    'Nathalia',
]
//Nesta linha de código estamos usando o .splice para remover um elemento na posição 1;
let fourPeople = myGroup.splice(1, 1);
//Aqui eu exibo o array com o elemento removido e o elemento removido;
console.log(myGroup); //Saída: ['Alejandra', 'Bruna', 'Samuel', 'Nathalia']
console.log(fourPeople); //Saída: ['Fernanda']

//----------------Exemplo 2 - Adicionar----------------
//Crio um array com nomes;
let myGroup2 = [
    'Alejandra',
    'Fernanda',
    'Bruna',
    'Samuel',
    'Nathalia',
]
//Nesta linha de código estamos usando o .splice para somente adicionar um 
//elemento na posição 5;
let fivePeople = myGroup2.splice(2, 0, 'Theo');
//Aqui eu exibo o array junto do elemento adicionado;
console.log(myGroup2); //Saída: ['Alejandra', 'Fernanda', 'Theo', 'Bruna', 'Samuel', 'Nathalia']

//----------------Exemplo 3 - Substituir----------------
//Crio um array com nomes;
let myGroup3 = [
    'Alejandra',
    'Fernanda',
    'Samuel',
    'Bruna',
    'Nathalia',
]
//Nesta linha de código estamos usando o .splice para substituir dois
//elemento na posição 1 e 2;
let People = myGroup3.splice(1, 2, 'Raphaelle', 'Jessica');
//Aqui eu exibo o array junto dos elementos substituídos;
console.log(myGroup3);