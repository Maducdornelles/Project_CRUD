// Inicialize a lista de pessoas como um array vazio
let peopleList = [];
let nextPersonId = 1; // ID inicial
let selectedPersonId = null; // ID da pessoa selecionada

// Função para adicionar uma pessoa à lista
function cadastrarPessoa(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;

    // Atribua um ID único à pessoa
    const person = {
        id: nextPersonId++, // Usar o próximo ID disponível e incrementar
        name,
        age,
        city,
    };

    peopleList.push(person);

    // Limpar os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";

    listarPessoas();
}

// Função para atualizar uma pessoa
function atualizarPessoa() {
    const id = selectedPersonId;
    if (id === null) {
        alert("Selecione uma pessoa da lista para atualizar.");
        return;
    }

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;

    const updatedPerson = {
        id,
        name,
        age,
        city,
    };

    const index = peopleList.findIndex((person) => person.id === id);
    if (index !== -1) {
        peopleList[index] = updatedPerson;
    }

    // Limpar os campos do formulário e o ID selecionado
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    selectedPersonId = null;

    listarPessoas();
}

// Função para deletar uma pessoa
function deletarPessoa() {
    const id = selectedPersonId;
    if (id === null) {
        alert("Selecione uma pessoa da lista para deletar.");
        return;
    }

    const index = peopleList.findIndex((person) => person.id === id);
    if (index !== -1) {
        peopleList.splice(index, 1);
    }

    // Limpar os campos do formulário e o ID selecionado
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    selectedPersonId = null;

    listarPessoas();
}

// Função para listar as pessoas na página
function listarPessoas() {
    const personList = document.getElementById("person-list");
    personList.innerHTML = "";

    peopleList.forEach((person) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>ID: ${person.id}</span>
            <span>Nome: ${person.name}</span>
            <span>Idade: ${person.age} anos</span>
            <span>Cidade: ${person.city}</span>
        `;

        listItem.addEventListener("click", () => {
            selectedPersonId = person.id;
            document.getElementById("name").value = person.name;
            document.getElementById("age").value = person.age;
            document.getElementById("city").value = person.city;
        });

        personList.appendChild(listItem);
    });
}

// Adicionar event listeners aos botões e ao formulário
document.getElementById("person-form").addEventListener("submit", cadastrarPessoa);
document.getElementById("update-button").addEventListener("click", atualizarPessoa);
document.getElementById("delete-button").addEventListener("click", deletarPessoa);

// Inicializar a lista de pessoas na página
listarPessoas();
