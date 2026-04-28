# 🎉 J.S. Festas — Lista de Convidados

Projeto desenvolvido como atividade prática da disciplina de **Programação Web I**, com o objetivo de fixar os conteúdos estudados em sala de aula.

A página simula o site oficial de uma organizadora de eventos chamada **J.S. Festas**, onde o usuário pode se "cadastrar" e gerenciar sua lista de convidados de forma interativa.

---

## 📋 Funcionalidades

- **Cadastro do usuário:** formulário com nome e e-mail. Ao enviar, o comportamento padrão do formulário é cancelado com `event.preventDefault()` e um `<h2>` de boas-vindas é inserido dinamicamente na página com o nome digitado.
- **Lista de convidados:** formulário para adicionar convidados com nome e idade. Cada convidado adicionado gera uma nova linha na tabela, criada via JavaScript, contendo:
  - Checkbox para confirmar presença
  - Nome e idade em células `<td>` individuais
  - Status ("Confirmado" / "Não"), atualizado dinamicamente ao marcar/desmarcar o checkbox
  - Botão ❌ para remover o convidado da lista
- **Contadores automáticos:** ao final da tabela, quatro contadores são atualizados em tempo real com `textContent`:
  - Total de convidados
  - Total de crianças (até 12 anos)
  - Total de adultos (acima de 12 anos)
  - Total de confirmados

---

## 🧠 Conceitos praticados

- Manipulação do **DOM** (`querySelector`, `appendChild`, `replaceChildren`)
- Criação de **elementos HTML via JavaScript** (`createElement`)
- Uso de **eventos** (`addEventListener`, `submit`, `change`, `click`)
- Cancelamento do comportamento padrão de formulários com `event.preventDefault()`
- Leitura de dados de formulário com `FormData`
- Uso de **arrays** e **objetos** para armazenar e gerenciar os convidados
- Atualização dinâmica de conteúdo com `textContent`
- Estilização condicional com `classList.add` / `classList.remove`
- Layout com **CSS Grid**

---

## 🗂️ Estrutura do projeto

```
lista_convidados/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── balão.png
    ├── happy_banner.png
    ├── pessoa.png
    ├── plano_balao-button2.jpg
    ├── plano_header.jpg
    ├── plano_main.png
    └── estrela_foot.png
```

---

## 🖥️ Layout da página

A página é dividida nas seguintes áreas, organizadas com **CSS Grid**:

| Área | Descrição |
|---|---|
| `header` | Logo e nome da empresa |
| `nav` | Menu com links âncora para as seções da página |
| Conteúdo de apoio | Apresentação da J.S. Festas e formulário de cadastro |
| `main` | Formulário de adição de convidados e tabela interativa |
| `footer` | Rodapé com nome da empresa |

---

## 🚀 Como executar

Não há dependências ou instalação necessária. Basta abrir o arquivo `index.html` diretamente no navegador.

```bash
# Clone o repositório (ou extraia o .zip)
# Abra o arquivo no navegador:
open index.html
```

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

---

*Projeto acadêmico — Programação Web I · FM 2026*
