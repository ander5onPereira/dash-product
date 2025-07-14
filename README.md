Teste Frontend
Objetivo:
Desenvolver uma aplicação web para gerenciamento de produtos, com foco em
utilização de Next, gerenciamento de estado, consumo de APIs, estilização com
Tailwind CSS e criação de testes.
Descrição do desafio:
Você deve criar uma aplicação de gerenciamento de produtos com as seguintes
funcionalidades:
Funcionalidades obrigatórias:

1. Listar produtos com as seguintes informações:
   o Nome do produto
   o Categoria
   o Preço
   o Descrição
   o Imagem (URL da imagem)
2. Criar um formulário para cadastro de novos produtos:
   o Campos: Nome, Preço, Descrição e URL da Imagem.
   o O produto cadastrado deve ser exibido na lista.
3. Implementar um filtro para buscar produtos pelo nome, faixa de preço.
4. Implementar ordenação dos resultados.
   Requisitos técnicos:
   • Usar NextJs, Typescript.
   • Gerenciar o estado global.
   • Consumir uma API fictícia (mock com JSONPlaceholder ou outra biblioteca
   como msw).
   • Estilizar o layout com Tailwind CSS.
   Extras (diferenciais):
   • Implementar paginação para a lista de produtos.
   • Tornar o layout responsivo.
   • Escrever documentação simples explicando as escolhas feitas no projeto.
   • 1 teste de snapshot de tela.
   PS: A beleza da tela não será critério de avaliação, mas de desempate.

------------------------------

Tecnologias utilizadas:
- NextJs
- Typescript
- React
- Tailwind CSS
- API Nextjs
- Prisma
- Sqlite
- Zustand
- react-toastify
- axios
- tanstack/react-query

Para atender os requisitos do teste frontend foi adicionado a o gerenciamento de estado global com o uso do Zustand, o consumo de API com o uso do axios, o gerenciamento de estado com o uso do tanstack/react-query e o estilização com o uso do Tailwind CSS.

A mock da api foi contruido com a propria API Nextjs, podendo tealizar todas as interações diretamente em um api real, salvando em um banco de dados sqlite.

Foram aplicadas resposividades adaptando o layout para telas desktop, tablet e mobile.

Realizado a implementação de filtros, para os campos exibidos na lista, ordenação e filtro por range de preço.

Ainda foi adicionado a paginação para a lista de produtos, para melhor visualização dos itens.

No forma foi adidionado uma validação simples só para validar o preenchimento dos campos obrigatorios.

A visualização dos dados é feita de forma parcial na lista é exibido "id, nome, categoria e preço" clicando no item da lista obre a dialog onde é exibido todos os dados do produto.

Na tela de detalhes é exibida a as opções de edição e exclusão do produto.


Execução do projeto:

- Instalar as dependencias do projeto

> npm install

- Iniciar o projeto

> npm run dev

