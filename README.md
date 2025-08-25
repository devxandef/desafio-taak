# Desafio Taak - App de Gestão de Clientes e Contatos

Este projeto implementa um aplicativo React Native para gestão de clientes e contatos, conforme especificado no desafio.

## Funcionalidades Implementadas

### Fluxo de Clientes
- **Tela Principal de Clientes**: Exibe lista de clientes cadastrados ou estado vazio
- **Adicionar Novo Cliente**: Formulário para cadastrar novo cliente com:
  - Nome da empresa
  - CNPJ
  - Contato (com autocomplete para buscar contatos cadastrados)
- **Cards de Cliente**: Exibição organizada das informações do cliente
- **Autocomplete Inteligente**: Busca contatos por nome, email ou telefone

### Fluxo de Contatos
- **Tela Principal de Contatos**: Exibe lista de contatos cadastrados ou estado vazio
- **Adicionar Novo Contato**: Formulário para cadastrar novo contato com:
  - Nome completo
  - E-mail
  - Telefone
  - Cargo
  - Data do último contato
- **Cards de Contato**: Exibição organizada das informações do contato

## Estrutura do Projeto

```
src/
├── components/
│   ├── ClienteCard.tsx      # Componente para exibir cards de clientes
│   ├── ContatoCard.tsx      # Componente para exibir cards de contatos
│   └── index.ts
├── context/
│   └── AppContext.tsx       # Contexto para gerenciar estado global
├── navigation/
│   ├── AppNavigator.tsx     # Stack navigator principal
│   ├── TabNavigator.tsx     # Bottom tab navigation
│   └── index.tsx
├── screens/
│   ├── clientes/
│   │   ├── index.tsx        # Tela principal de clientes
│   │   ├── NovoCliente.tsx  # Tela para adicionar cliente
│   │   └── styles.ts        # Estilos da tela de clientes
│   └── contato/
│       ├── index.tsx        # Tela principal de contatos
│       ├── NovoContato.tsx  # Tela para adicionar contato
│       └── styles.ts        # Estilos da tela de contatos
├── styles/
│   └── shared.ts            # Estilos compartilhados
└── types/
    └── index.ts             # Definições de tipos TypeScript
```

## Como Usar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar o Projeto
```bash
npm start
```

### 3. Navegar pelo App
- **Home**: Tela inicial
- **Clientes**: Visualizar e adicionar clientes
- **Contatos**: Visualizar e adicionar contatos

### 4. Adicionar Novo Cliente
1. Navegue para a aba "Clientes"
2. Toque no botão "+" (canto inferior direito)
3. Preencha os campos:
   - Nome da empresa
   - CNPJ
   - Contato (com autocomplete para buscar contatos cadastrados)
4. Toque em "Salvar"

**Autocomplete de Contatos:**
- Digite no campo "Contato" para buscar contatos cadastrados
- A busca funciona por nome, email ou telefone
- Selecione um contato da lista para preencher automaticamente
- Mostra informações completas: nome, cargo, email e telefone

### 5. Adicionar Novo Contato
1. Navegue para a aba "Contatos"
2. Toque no botão "+" (canto inferior direito)
3. Preencha os campos:
   - Nome completo
   - E-mail
   - Telefone
   - Cargo
   - Data do último contato
4. Toque em "Salvar"

## Tecnologias Utilizadas

- **React Native** com Expo
- **TypeScript** para tipagem estática
- **React Navigation** para navegação
- **Styled Components** para estilização
- **Context API** para gerenciamento de estado

## Arquitetura de Estilos

O projeto utiliza uma arquitetura modular para estilos:

- **Estilos Compartilhados** (`src/styles/shared.ts`): Componentes reutilizáveis como botões, inputs, headers
- **Estilos Específicos** (`src/screens/*/styles.ts`): Estilos específicos de cada tela
- **Separação de Responsabilidades**: Lógica de negócio separada da estilização
