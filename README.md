# Guia Completo: Configurando React no Debian Testing 13 com VS Code

Este guia detalhado irá auxiliá-lo na configuração de um ambiente de desenvolvimento React completo em seu sistema Debian Testing 13, utilizando o Visual Studio Code como seu editor de código. Ao final, você terá um ambiente pronto para criar e executar aplicações React.

## 1. Pré-requisitos

Antes de iniciar a instalação das ferramentas necessárias para o desenvolvimento React, é fundamental garantir que seu sistema Debian Testing 13 esteja atualizado e que você tenha privilégios de superusuário (sudo) para instalar pacotes.

### 1.1. Atualizando o Sistema

É uma boa prática manter seu sistema operacional atualizado para garantir a compatibilidade e a segurança. Abra um terminal e execute os seguintes comandos:

```bash
sudo apt update
sudo apt upgrade -y
```

O comando `sudo apt update` atualiza a lista de pacotes disponíveis, enquanto `sudo apt upgrade -y` instala as versões mais recentes de todos os pacotes instalados. O `-y` confirma automaticamente todas as perguntas de instalação.

## 2. Instalação do Node.js e npm

O Node.js é um ambiente de tempo de execução JavaScript que permite executar código JavaScript fora do navegador. O npm (Node Package Manager) é o gerenciador de pacotes padrão para o Node.js e é essencial para instalar bibliotecas e ferramentas React.

Embora o Debian Testing possa ter versões do Node.js e npm em seus repositórios padrão, é altamente recomendável usar o Node Version Manager (nvm) para instalar e gerenciar múltiplas versões do Node.js. Isso oferece flexibilidade e evita conflitos de versão em projetos diferentes.

### 2.1. Instalando o nvm (Node Version Manager)

Para instalar o nvm, execute o seguinte comando no seu terminal. Este comando baixa e executa o script de instalação do nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Após a execução, você precisará fechar e reabrir seu terminal, ou carregar as variáveis de ambiente do nvm manualmente. Para carregar manualmente, execute:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Para verificar se o nvm foi instalado corretamente, execute:

```bash
nvm --version
```

Se a versão do nvm for exibida, a instalação foi bem-sucedida.

### 2.2. Instalando o Node.js e npm com nvm

Com o nvm instalado, você pode instalar a versão mais recente do Node.js (que inclui o npm) com o seguinte comando:

```bash
nvm install node
```

Este comando instalará a versão LTS (Long Term Support) mais recente do Node.js. Para verificar as versões instaladas e a versão em uso, você pode usar:

```bash
nvm ls
nvm use node
```

Para verificar se o Node.js e o npm foram instalados corretamente, execute:

```bash
node -v
npm -v
```

Você deverá ver as versões instaladas do Node.js e do npm.

## 3. Instalação do Visual Studio Code

O Visual Studio Code (VS Code) é um editor de código-fonte leve, mas poderoso, desenvolvido pela Microsoft. Ele oferece excelente suporte para desenvolvimento web, incluindo React, com uma vasta gama de extensões.

### 3.1. Adicionando o Repositório do VS Code

Para instalar o VS Code no Debian, a maneira mais recomendada é adicionar o repositório oficial da Microsoft. Isso garante que você receba as atualizações mais recentes diretamente.

Primeiro, instale as dependências necessárias:

```bash
sudo apt install software-properties-common apt-transport-https wget -y
```

Em seguida, importe a chave GPG da Microsoft:

```bash
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
```

Agora, adicione o repositório do VS Code ao seu sistema:

```bash
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```

### 3.2. Instalando o VS Code

Após adicionar o repositório, atualize a lista de pacotes e instale o VS Code:

```bash
sudo apt update
sudo apt install code -y
```

Você pode iniciar o VS Code digitando `code` no terminal ou procurando por ele no menu de aplicativos.

## 4. Extensões Essenciais do VS Code para React

Para otimizar sua experiência de desenvolvimento React no VS Code, é altamente recomendável instalar algumas extensões. Elas fornecem recursos como autocompletar, formatação de código, depuração e realce de sintaxe.

Abra o VS Code e vá para a aba de Extensões (Ctrl+Shift+X ou Cmd+Shift+X). Pesquise e instale as seguintes extensões:

*   **ES7+ React/Redux/GraphQL/React-Native snippets**: Fornece snippets de código úteis para React, Redux e outras tecnologias relacionadas.
*   **Prettier - Code formatter**: Um formatador de código opinativo que garante um estilo de código consistente em seus projetos.
*   **ESLint**: Integra o ESLint ao VS Code, ajudando a identificar e corrigir problemas de linting e estilo de código.
*   **Auto Rename Tag**: Renomeia automaticamente a tag HTML/XML emparelhada.
*   **Bracket Pair Colorizer (ou a funcionalidade nativa do VS Code)**: Ajuda a identificar pares de colchetes correspondentes, o que é muito útil em JSX.

## 5. Criando um Projeto React (Hello World)

Com seu ambiente configurado, você está pronto para criar seu primeiro projeto React. Usaremos o `create-react-app` (ou Vite, que é mais moderno e rápido) para iniciar um novo projeto.

### 5.1. Usando Vite (Recomendado)

O Vite é uma ferramenta de build de frontend que oferece uma experiência de desenvolvimento muito mais rápida. Para criar um novo projeto React com Vite, abra seu terminal e execute:

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

*   `npm create vite@latest my-react-app -- --template react`: Cria um novo projeto Vite chamado `my-react-app` usando o template React.
*   `cd my-react-app`: Navega para o diretório do projeto.
*   `npm install`: Instala todas as dependências do projeto.
*   `npm run dev`: Inicia o servidor de desenvolvimento. Sua aplicação estará disponível em `http://localhost:5173` (ou outra porta, se 5173 estiver em uso).

### 5.2. Usando Create React App (Alternativa)

Se você preferir usar o `create-react-app` (que é mais antigo, mas ainda amplamente utilizado), execute:

```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```

*   `npx create-react-app my-react-app`: Cria um novo projeto React chamado `my-react-app`.
*   `cd my-react-app`: Navega para o diretório do projeto.
*   `npm start`: Inicia o servidor de desenvolvimento. Sua aplicação estará disponível em `http://localhost:3000`.

## 6. Modificando o Projeto (Hello World)

Agora que seu projeto está rodando, vamos modificá-lo para exibir um simples 


Hello World!'.

### 6.1. Editando `App.js` (ou `App.jsx`)

No seu editor VS Code, navegue até o diretório do seu projeto (`my-react-app`) e abra o arquivo `src/App.js` (ou `src/App.jsx` se você usou o template Vite). Apague o conteúdo existente e substitua-o pelo seguinte:

```jsx
import React from 'react';
import './App.css'; // Certifique-se de que este arquivo existe e está importado

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <p>Seu primeiro projeto React está funcionando!</p>
      </header>
    </div>
  );
}

export default App;
```

### 6.2. Editando `App.css`

Para centralizar o texto e dar um visual mais agradável, abra o arquivo `src/App.css` e adicione ou modifique os seguintes estilos:

```css
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}
```

Salve ambos os arquivos. Se o seu servidor de desenvolvimento (`npm run dev` ou `npm start`) ainda estiver rodando, você verá as mudanças refletidas automaticamente no seu navegador.

## 7. Próximos Passos

Parabéns! Você configurou com sucesso seu ambiente de desenvolvimento React no Debian Testing 13 e criou seu primeiro projeto "Hello World". A partir daqui, você pode explorar os seguintes tópicos para aprofundar seus conhecimentos:

*   **Componentes React**: Aprenda a criar e reutilizar componentes para construir interfaces de usuário complexas.
*   **Estado e Props**: Entenda como gerenciar dados em suas aplicações React.
*   **Hooks**: Explore os Hooks do React (useState, useEffect, useContext, etc.) para adicionar funcionalidades aos seus componentes funcionais.
*   **Roteamento**: Utilize bibliotecas como `react-router-dom` para criar navegação entre diferentes páginas em sua aplicação.
*   **Gerenciamento de Estado**: Para aplicações maiores, considere bibliotecas como Redux ou Zustand para gerenciar o estado global.
*   **Estilização**: Aprofunde-se em diferentes métodos de estilização, como CSS Modules, Styled Components ou Tailwind CSS.
*   **Testes**: Aprenda a escrever testes para seus componentes React usando bibliotecas como Jest e React Testing Library.

## 8. Referências

[1] Documentação Oficial do Node.js: [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
[2] Documentação Oficial do nvm: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
[3] Documentação Oficial do Visual Studio Code: [https://code.visualstudio.com/docs](https://code.visualstudio.com/docs)
[4] Documentação Oficial do React: [https://react.dev/](https://react.dev/)
[5] Documentação Oficial do Vite: [https://vitejs.dev/](https://vitejs.dev/)
[6] Documentação Oficial do Create React App: [https://create-react-app.dev/](https://create-react-app.dev/)
