import { users } from "./data/users.js";
const usuarios = users;

const listaUsuariosElement = document.createElement('ul');
document.body.appendChild(listaUsuariosElement);

for (let user of usuarios) {
    inserirNomeNaLista(user);
}

const inserirUsuario = document.querySelector("#btnInserir")
inserirUsuario.addEventListener('click', event => {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElemente = document.querySelector('#idade');
    const inputCpfElemente = document.querySelector('#cpf');
    const user = {
        nome: inputNomeElement.value,
        idade: inputIdadeElemente.value,
        cpf: inputCpfElemente.value
    }
    inserirNomeNaLista(user);
    inputNomeElement.value = "";  
    inputIdadeElemente.value = "";
    inputCpfElemente.value = "";
})

function inserirNomeNaLista(user) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.textContent = user.nome + ' ' + user.idade + ' ' + user.cpf;

    spanElement.addEventListener('click', event => {
        botaoRemoverElement.remove();
        const inputElement = document.createElement('input');
        inputElement.value = spanElement.textContent;
        const editBtnElement = document.createElement('button');
        editBtnElement.textContent = "ir";
        editBtnElement.addEventListener('click', event => {
            
            spanElement.textContent = inputElement.value;
            inputElement.remove();
            editBtnElement.remove();
            liElement.appendChild(spanElement);
            liElement.appendChild(botaoRemoverElement)
            
        })
        liElement.appendChild(inputElement);
        liElement.appendChild(editBtnElement);
        spanElement.remove();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaUsuariosElement.appendChild(liElement);
}



