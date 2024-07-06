# Gerador de usuários aleatórios

## Descrição

Aplicação frontend em React para listar usuários aleatórios da API `https://randomuser.me/api`. Exibe informações dos usuários, permite pesquisa e carregamento infinito.

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Axios
- Docker
- Docker Compose
- Nginx

## Funcionalidades

- Lista inicial de 20 usuários
- Scroll infinito
- Filtro de pesquisa
- Cards com nome, gênero, idade, telefone e email

## Como Rodar

### Pré-requisitos

- Node.js
- Docker
- Docker Compose

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/theferp1/Desafio-Lapisco-FrontEnd.git
   cd Desafio-Lapisco-FrontEnd
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode a aplicação:
   ```bash
   npm run dev
   ```

4. Acesse em: `http://localhost:8000`

### Com Docker

1. Build da imagem:
   ```bash
   docker-compose build
   ```

2. Inicie os containers:
   ```bash
   docker-compose up
   ```

3. Acesse em: `http://localhost:8000`

## Estrutura do Projeto

```plaintext
├── public
│   ├── search-icon.svg
│   └── ...
├── src
│   ├── components
│   │   ├── UserCard.tsx
│   │   ├── UserList.tsx
│   │   └── SearchBar.tsx
│   ├── services
│   │   └── api.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── .docker-compose.yml
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

