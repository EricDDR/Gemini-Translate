# 🤖 Gemini Tradutor

Um tradutor de idiomas simples e poderoso que utiliza a API do Google Gemini para fornecer traduções contextuais e precisas. Este projeto foi desenvolvido como uma aplicação full-stack para demonstrar a integração entre frontend, backend e uma API de IA externa.

---

## 🚀 Sobre o Projeto

Este projeto consiste em uma aplicação web completa onde o usuário pode inserir um texto em português, selecionar um idioma de destino e receber a tradução gerada pela Inteligência Artificial do Google Gemini.

O objetivo principal era aplicar conceitos de desenvolvimento web, incluindo:
* Criação de uma API RESTful em Node.js.
* Comunicação entre cliente (frontend) e servidor (backend).
* Integração com uma API externa de forma segura.
* Manipulação do DOM com JavaScript para criar uma interface dinâmica.

---

## ✨ Funcionalidades

* **Tradução Inteligente:** Utiliza o modelo generativo do Gemini para traduções mais naturais.
* **Interface Simples:** Uma interface limpa e intuitiva com áreas de texto para entrada e saída.
* **Múltiplos Idiomas:** Suporte para diversos idiomas de destino através de um menu de seleção.
* **Feedback em Tempo Real:** O usuário é informado quando a tradução está em andamento.
* **Design Responsivo (Básico):** A interface se adapta a diferentes tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **Backend:**
    * [Node.js](https://nodejs.org/en/) - Ambiente de execução JavaScript.
    * [Express.js](https://expressjs.com/pt-br/) - Framework para criação da API.
    * [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) - SDK oficial para a API do Gemini.
    * [Dotenv](https://www.npmjs.com/package/dotenv) - Para gerenciar variáveis de ambiente de forma segura.
    * [CORS](https://www.npmjs.com/package/cors) - Para permitir a comunicação entre o frontend e o backend.

* **Frontend:**
    * HTML5
    * CSS3
    * JavaScript (Puro / Vanilla JS)

---

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

### Pré-requisitos

* Você precisa ter o [Node.js](https://nodejs.org/en/) instalado (versão 18 ou superior).
* Você precisa de uma chave de API do [Google Gemini](https://aistudio.google.com/).

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    cd nome-do-repositorio
    ```

2.  **Instale as dependências do backend:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Dentro dele, adicione sua chave da API do Gemini:
    ```
    GEMINI_API_KEY=SUA_CHAVE_API_VEM_AQUI
    ```

4.  **Inicie o servidor backend:**
    ```bash
    node server.js
    ```
    O terminal deverá exibir a mensagem: `🚀 Servidor rodando em http://localhost:3000`.

5.  **Abra o frontend:**
    * Abra o arquivo `index.html` diretamente no seu navegador de preferência (ex: Google Chrome, Firefox).

Pronto! Agora você pode usar o tradutor localmente.

---

## 🏛️ Arquitetura

A aplicação segue uma arquitetura cliente-servidor simples:

1.  **Frontend (Cliente):** O usuário interage com a página (`index.html`). O `script.js` captura o texto e envia uma requisição `POST` para o backend.
2.  **Backend (Servidor):** A API construída com Express recebe a requisição, valida os dados e chama a API do Gemini com o prompt de tradução.
3.  **API Gemini (Externa):** Processa o prompt e retorna o texto traduzido para o backend.
4.  **Retorno:** O backend envia a tradução de volta para o frontend, que a exibe na tela.

```mermaid
graph TD
    A[Usuário] -- Digita o texto e clica em "Traduzir" --> B(Frontend <br> HTML/CSS/JS);
    B -- Envia Requisição (fetch) para /translate --> C{Backend <br> (Node.js/Express)};
    C -- Chama a API externa com a API Key --> D[Google Gemini API];
    D -- Retorna a tradução --> C;
    C -- Envia a tradução em formato JSON --> B;
    B -- Exibe o resultado para o --> A;
