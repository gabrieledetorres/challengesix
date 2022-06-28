// Crie um objeto que receba ao menos três propriedades sobre você.
const dados = {
    nome: 'gabriele',
    idade: 22,
    cidade: 'Paulo Afonso - BA'
}
// Adicione uma nova propriedade sem alterar seu objeto inicial.

dados.corPreferida = 'salmão';

// Remova uma propriedade desse objeto.

delete dados.cidade;

//Mostre no console todas as propriedades desse objeto.

console.log(dados);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 

//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.

cadastro = [ 
{
    nome:'Raquel',
    idade:20,
    telefone:75958258522,
    amigos:['pedro', 'carla', 'alice', 'alexandre']
},
{
    nome:'Gabriele',
    idade:22,
    telefone:11988682698,
    amigos:['Urias', 'Pablo','Lorelay','Gloria']
},
{
    nome:'Karol',
    idade:22,
    telefone:71986982000,
    amigos:['Gleyce','Lana','Nora','Tayná']
},
{
    nome:'Beyoncé',
    idade:40,
    telefone:61925843648,
    amigos:['Rihanna','Katy','Taylor','Kanye']
},
{
    nome:'Monica',
    idade:32,
    telefone:11988695820,
    amigos:['Chandler','Phoebe', 'Ross', 'Rachel']
}]

    console.log(`Um amigo de ${cadastro[0].nome} é ${cadastro[0].amigos[0]}`);
    console.log(`Um amigo de ${cadastro[1].nome} é ${cadastro[1].amigos[1]}`);
    console.log(`Um amigo de ${cadastro[2].nome} é ${cadastro[2].amigos[2]}`);
    console.log(`Um amigo de ${cadastro[3].nome} é ${cadastro[3].amigos[3]}`);
    console.log(`Um amigo de ${cadastro[4].nome} é ${cadastro[4].amigos[2]}`);

