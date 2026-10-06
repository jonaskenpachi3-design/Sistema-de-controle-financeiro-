# 💰 Sistema de Controle Financeiro

Uma aplicação web para controle de ganhos e despesas, desenvolvida com **HTML5, CSS3 e JavaScript**.

O projeto permite criar usuários, realizar login, cadastrar ganhos e despesas, acompanhar o saldo financeiro, filtrar movimentações por período e visualizar os resultados através de gráficos.

---

## 🚀 Demonstração

🌐 **Acesse o sistema online:**

https://jonaskenpachi3-design.github.io/Sistema-de-controle-financeiro-/

---

## 📸 Sobre o projeto

O **Sistema de Controle Financeiro** foi desenvolvido como um projeto prático para aplicar conceitos de desenvolvimento web, lógica de programação, manipulação do DOM, armazenamento de dados no navegador e criação de interfaces interativas.

A aplicação possui uma interface dividida em:

- 🔐 Tela de login e cadastro
- 📊 Dashboard financeiro
- 💰 Área de ganhos
- 💸 Área de despesas
- 📈 Gráfico financeiro
- 🔔 Sistema de notificações
- ⚠️ Modal de confirmação para ações

---

## ✨ Funcionalidades

### 🔐 Autenticação

- Cadastro de novos usuários
- Login de usuários
- Logout
- Validação de usuário e senha
- Hash de senha utilizando **SHA-256**
- Utilização da **Web Crypto API**

### 💰 Controle de ganhos

- Cadastro de ganhos
- Descrição da movimentação
- Valor
- Data
- Listagem dos ganhos
- Exclusão de registros
- Validação dos campos

### 💸 Controle de despesas

- Cadastro de despesas
- Descrição da movimentação
- Valor
- Data
- Listagem das despesas
- Exclusão de registros
- Validação dos campos

### 📊 Dashboard

O dashboard apresenta:

- Total de ganhos
- Total de despesas
- Saldo atual
- Filtro por período
- Gráfico comparativo
- Atualização automática dos valores

### 📈 Gráficos

A aplicação utiliza a biblioteca **Chart.js** para representar visualmente os dados financeiros.

O gráfico apresenta:

- Ganhos
- Despesas
- Valores em reais
- Saldo atual
- Animações
- Tooltips personalizados

### 💾 Armazenamento

Os dados são armazenados no navegador através do:

`localStorage`

Cada usuário possui seus próprios dados de ganhos e despesas.

### 🔔 Notificações

O sistema possui notificações do tipo Toast para informar ações como:

- Ganho adicionado
- Despesa adicionada
- Campos não preenchidos
- Valor inválido

### ⚠️ Confirmações

Antes de ações importantes, como adicionar ou excluir registros, o sistema apresenta um modal de confirmação.

### 📱 Responsividade

A interface possui regras de CSS para adaptação a diferentes tamanhos de tela.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilização e responsividade |
| JavaScript | Lógica e interatividade |
| Web Crypto API | Hash SHA-256 das senhas |
| LocalStorage | Armazenamento dos dados |
| Chart.js | Criação dos gráficos |
| GitHub Pages | Hospedagem da aplicação |

---

## 🧠 Conceitos praticados

Este projeto permitiu praticar diversos conceitos importantes de desenvolvimento:

- Manipulação do DOM
- Eventos JavaScript
- Funções
- Arrays e objetos
- `map()`
- `filter()`
- `reduce()`
- Funções assíncronas
- `async/await`
- Validação de formulários
- Manipulação de dados
- CRUD no navegador
- LocalStorage
- Web Crypto API
- SHA-256
- Template Literals
- Manipulação dinâmica de HTML
- Eventos do DOM
- CSS Flexbox
- Media Queries
- Animações CSS
- Modais
- Toast Notifications
- Integração com biblioteca externa
- Visualização de dados com gráficos

---

## 📂 Estrutura do projeto

```text
Sistema-de-controle-financeiro-/
│
├── WEB.html
│
├── Untitled-1.css
│
├── Untitled-2.js
│
├── banco de dado.java
│
└── README.md
