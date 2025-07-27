# 📚 BookFlow

O **BookFlow** é uma API REST desenvolvida para gerenciar livros e editoras, permitindo operações como criação, listagem, atualização e exclusão de livros. Ideal para aplicações de bibliotecas, sistemas de catálogo ou aprendizado de arquitetura backend moderna.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Fastify** 
- **Prisma ORM**  
- **MongoDB**  

## 📁 Estrutura de Pastas

```

├── prisma/                  # Configuração e schema do Prisma
├── src/
│   ├── controllers/         # Controladores para lidar com as requisições
│   ├── services/            # Regras de negócio e acesso ao banco
│   ├── routes.ts            # Definição das rotas da API
│   └── server.ts            # Arquivo principal do servidor Fastify
├── .env                     # Variáveis de ambiente (como a string do MongoDB)
├── .gitignore
├── package.json
├── README.md

````

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```cmd
git clone https://github.com/pedrodrey/BookFlow.git
cd BookFlow
````

### 2. Instale as dependências

```cmd
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz do projeto com a variável de conexão ao MongoDB:

```
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority"
```

### 4. Gere o client do Prisma

```cmd
npx prisma generate
```

### 5. Inicie o servidor

```cmd
npm run dev
```

O servidor iniciará em `http://localhost:3333`.

## 📌 Rotas disponíveis

| Método | Rota     | Descrição                           |
| ------ | -------- | ----------------------------------- |
| POST   | `/book`  | Cadastra um novo livro              |
| GET    | `/books` | Lista todos os livros               |
| DELETE | `/book`  | Deleta um livro                     |
| PATCH  | `/book`  | Atualiza dados de um livro          |

## 🛠 Exemplos de Requisição

### Criar Livro

```json
POST /book

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "isbn": "9780132350884",
  "publishedAt": "2008-08-01T00:00:00.000Z",
  "publisherName": "Prentice Hall"
}
```

### Atualizar Livro

```json
PATCH /book

{
  "id": "6838edccf2ca6b206917f3a3",
  "title": "Clean Code - Atualizado"
}
```

### Deletar Livro

```
DELETE /book?id=6838edccf2ca6b206917f3a3
```

## 🧪 Testando a API

Você pode testar a API utilizando o [Postman](https://www.postman.com/) ou o [Insomnia](https://insomnia.rest/).

---

## 📎 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contato

Criado por [@pedrodrey](https://github.com/pedrodrey). Contribuições, sugestões e feedbacks são muito bem-vindos!
