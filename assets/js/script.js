const formCadastro = document.querySelector("#form-cadastro");

formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = getNome(formCadastro);

    renderH2(nome);

    formCadastro.reset();
    document.querySelector("input[name='usuario']").focus();
});

function getNome(form) {
    const dados = new FormData(form);

    const name = dados.get("usuario");
    return name;
}

function newH2(nome) {
    const h2 = document.createElement("h2");
    
    h2.textContent = `Olá, ${nome}! Comece a organizar sua lista!`;
    return h2;
}

function renderH2(nome) {
    const divH2 = document.querySelector("#title");

    divH2.replaceChildren();

    const h2 = newH2(nome);

    divH2.appendChild(h2);
}

const formAddConvidados = document.querySelector("#form-convidados");

const convidados = [];

const buttonAddConvidado = document.querySelector("#addConvidado");

formAddConvidados.addEventListener("submit", (event) => {
    event.preventDefault();

    const dados = getNameAge(formAddConvidados);
    const name = dados.name;
    const age = dados.age;

    if(Number(age<0)) {
        alert("Idade inválida!");
        return;
    }

    const convidado = {
        name: name,
        age: age,
        confirmed: false
    }

    convidados.push(convidado);

    renderListConvidados();
    contadores();

    formAddConvidados.reset();
    document.querySelector("input[name='name']").focus();
});

function getNameAge(form) {
    const dados = new FormData(form);

    const name = dados.get("name");
    const age = dados.get("age");
    
    return {name, age};
}

function newConvidado(convidado, index) {
    const trElement = document.createElement("tr");
    const inputCheckbox = document.createElement("input");
    const tdName = document.createElement("td");
    const tdAge = document.createElement("td");
    const tdStatus = document.createElement("td");
    const spanElement = document.createElement("span");
    
    inputCheckbox.type = "checkbox";
    inputCheckbox.checked = convidado.confirmed;
    inputCheckbox.addEventListener("change", () => {
        convidado.confirmed = inputCheckbox.checked;

        atualizarStatus();
        contadores();
    });
    tdName.textContent = convidado.name;
    tdName.classList.add("text-table");
    tdName.classList.add("td-padding");

    tdAge.textContent = convidado.age;
    tdAge.classList.add("text-table");
    tdAge.classList.add("td-padding");

    tdStatus.classList.add("text-table");
    tdStatus.classList.add("td-padding");

    function atualizarStatus() {
        tdStatus.classList.remove("status-nao", "status-confirmado");
        if(convidado.confirmed) {
            tdStatus.textContent = "Confirmado";
            tdStatus.classList.add("status-confirmado");
        } else {
            tdStatus.textContent = "Não";
            tdStatus.classList.add("status-nao");
        }
    }

    atualizarStatus();

    spanElement.textContent = "❌";
    spanElement.addEventListener("click", () => {
        convidados.splice(index, 1);

        renderListConvidados();
        contadores();
    })
    
    trElement.appendChild(inputCheckbox);
    trElement.appendChild(tdName);
    trElement.appendChild(tdAge);
    trElement.appendChild(tdStatus);
    trElement.appendChild(spanElement);
    
    return trElement;
}

function renderListConvidados() {
    const listConvidados = document.querySelector("#lista-convidados");

    listConvidados.replaceChildren();

    convidados.forEach((convidado, index) => {
        const trTable = newConvidado(convidado, index);

        listConvidados.appendChild(trTable);
    });
}

function contadores() {
    let total = convidados.length;
    let totalCriancas = 0;
    let totalAdultos = 0;
    let totalConfirmados = 0;

    convidados.forEach((convidado) => {
        if(Number(convidado.age <=12)) {
            totalCriancas++;
        } else {
            totalAdultos++;
        }

        if(convidado.confirmed) {
            totalConfirmados++;
        }
    });

    document.querySelector("#total-convidados").textContent = total;
    document.querySelector("#total-criancas").textContent = totalCriancas;
    document.querySelector("#total-adultos").textContent = totalAdultos;
    document.querySelector("#total-confirmados").textContent = totalConfirmados;
}