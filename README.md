<div  id='top' >

# API-GitHub

</div>

O projeto deste repositório consiste em consumir a API do GitHub e salvar repositórios em uma página de favoritos.

> Nota: Este é um projeto acadêmico que criei para testar e fixar o aprendizado em React, Css, Javascript, SCSS e principalmente em mockar APIS. O projeto consiste em lidar com a interação de componentes, usando estados globais com o uso do Context API.
>
> O projeto irá sofrer alterações ao decorrer do meu aprendizado, irei adicionar mais funções e refatorar o código com melhores práticas.

| 🪧 API-GitHub |     |
| -------------- | --- |
| 🏷️ Tecnologias | React, JavaScript, HTML, CSS, SCSS, Context API|
| 🚀 URL         | **URL** |

## Demonstração de uso

https://user-images.githubusercontent.com/116130103/235735563-7b167e13-0a2d-4632-ac08-896b0336ddd7.mp4
>
<div>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
</div>




## ✅ Requisitos técnicos

- **Front-end:** React, Javascript, CSS, SASS.
- **Back-end:** Node.

## 🖧 Requisitos

### Página de busca
- [x] Nesta página deve haver um campo de texto para que o usuário possa informar um valor para a busca.
- [x] Deve haver a funcionalidade do usuário escolher se quer fazer a busca por nome de usuário ou repositório.

### Página de usuários
- [x] A página deve exibir o nome e o avatar de todos os usuários encontrados pela busca na API do GitHub.
- [x] O usuário deve ser capaz de selecionar um perfil de usuário clicando em um resultado.
- [x] Ao selecionar um perfil, o sistema deve redirecionar o usuário para a página de perfil correspondente.

### Página de perfil de usuário
- [x] A página deve exibir informações detalhas do usuário selecionado, incluindo seu nome, nome de usuário, avatar, bio, números de seguidores, numero de seguidos e localização.
- [x] A página também deve exibir os repositórios do usuário selecionado.
- [x] No final de cada repositório deve haver a possibilidade de favoritar ou desfavoritar um repositório.
- [x] Deve haver um botão para fazer mais requisições para a API e mostrar mais resultados.

### Página de repositórios 
- [x] A página deve exibir uma lista de repositórios encontrados pela busca na API do GitHub, nesta lista deve conter o nome e a descrição de cada repositório.
- [x] Deve haver na página a funcionalidade de adicionar e remover favoritos ao contexto de favoritos.
- [x] Deve Haver um botão para fazer mais requisições para a API e mostrar mais resultados.

### Página de favoritos
- [x] A página deve exibir todos os favoritos que foram adicionados ao contexto de favoritos pelo usuário.
- [x] Caso não haja nenhum favorito a página deve informar que não há favoritos.


### Página 404
- [x] Se o usuário informar uma url que não exista no projeto, ele automaticamente será redirecionado para esta página.

### Modal
- [x] Caso o usuário insira um valor que não exista no banco de dados do github, o modal irá aparecer informando ao usuário que o repositório ou usuário não existe.

### Opcionais

- [x] Aplicação responsiva.

## Como usar

### Acessando a url

- Adicione um valor na barra de busca.
- Selecione se você quer fazer a busca por usuários ou por repositório.
- Caso tenha escolhido por usuario, clique em um usuário para ser redirecionado para a página de perfil do usuário.
- Nesta página o usuário pode adicionar e remover repositórios ao contexto de favoritos.
- Caso tenha escolhido repositórios, irá aparecer uma lista de repositórios que você pode adicionar e remover ao contexto de favoritos.

### Baixando o projeto

- Você pode fazer um clone ou baixar o arquivo zip do repositório.
- Utilize o comando npm install para instalar as dependências do projeto.
- Utilize o comando npm start para executar o projeto.

<a href='#top'>🔼 Voltar ao topo</a>
