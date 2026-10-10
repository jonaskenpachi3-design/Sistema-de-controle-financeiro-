# 💰 Sistema de Controle Financeiro

Aplicação web de controle de ganhos e despesas feita com **HTML, CSS e JavaScript puros**, sem backend. Os dados ficam no navegador de cada usuário.

🌐 **Demo:** https://jonaskenpachi3-design.github.io/Sistema-de-controle-financeiro-/

## Funcionalidades

- **Conta de usuário:** cadastro, login e logout. A senha é guardada como hash SHA-256 (Web Crypto API).
- **Ganhos e despesas:** cadastro com descrição, valor e data, listagem e exclusão, com validação dos campos.
- **Dashboard:** total de ganhos, total de despesas e saldo, com filtro por período.
- **Gráfico:** comparativo entre ganhos e despesas com [Chart.js](https://www.chartjs.org/).
- **Feedback ao usuário:** notificações (toast) e modal de confirmação antes de excluir.
- **Armazenamento local:** `localStorage`, separado por usuário.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura |
| CSS3 | Estilo e adaptação a telas menores |
| JavaScript | Lógica e interatividade |
| Web Crypto API | Hash das senhas |
| localStorage | Persistência dos dados |
| Chart.js (via CDN) | Gráficos |
| GitHub Pages | Hospedagem |

## Estrutura

```text
Sistema-de-controle-financeiro-/
├── index.html               # Páginas e lógica principal da aplicação
├── style.css                # Estilos
├── script.js                # Modo escuro automático e ajustes do gráfico
├── extras/
│   └── menu-produtos.java   # Rascunho de estudo em Java, fora da aplicação
├── LICENSE
└── README.md
```

## Como executar

Não há dependências para instalar. Clone o repositório e abra o `index.html` no navegador:

```bash
git clone https://github.com/jonaskenpachi3-design/Sistema-de-controle-financeiro-.git
cd Sistema-de-controle-financeiro-
```

Ou sirva por HTTP local:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Limitações conhecidas

- Os dados ficam só no navegador: limpar os dados do site apaga contas e lançamentos.
- A autenticação é apenas didática. Como tudo roda no cliente, ela não protege dados de verdade.
- O arquivo `extras/menu-produtos.java` é um rascunho incompleto e não compila.

## Autor e licença

Desenvolvido por **Jonas Sousa**. Distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE).
