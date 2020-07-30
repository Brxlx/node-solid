# Projeto de API com padrões SOLID

> Inicializando

- Inicializar repositório em branco:

    `yarn init -y`

- Adicionar dependências:

    `yarn add express`

    `yarn add -D typescript @types/express ts-node-dev`

- Inicializar `tsconfig.json`:

    `yarn tsc --init`

- Criar Entidades
    - Se for formato de classe, utilizar _generic_ `Omit` para o _id_ não ser obrigatório

- Adicionar biblioteca _uuidv4_

- Criar repositórios

- Criar casos de uso (como `CreateUserUseCase`)

    - `CreateUserUseCase`
    - `UserController`
    - `UserDTO`

- No repositório, criar e exportar interface de Usuário

- Importar interface no `CreateUserUseCase` com os métodos prontos a serem instanciados

- Setar o formato dos dados de recebimento no `Data Transfer Object` _(DTO)_

    - No _UseCase_, falar o tipo de recebimento dos dados para o DTO

- Criar `providers` para comunicação com _apis_ externas, etc.

- Implementar _Controllers_ com o 'contrato' da assinatura do método de execução

- Criar `implementations` em _repositories_ e _providers_

- Criar `index.ts` no _CreateUser_ para implementação da função que realiza ação de enviar email

- Chamar `createUserController` no _routes_ com o método _handle_