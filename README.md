# Desafio Taak - React Native

Este é um projeto React Native criado com Expo e TypeScript.

## 🚀 Como executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI (instalado globalmente ou via npx)

### Instalação
```bash
# Instalar dependências
npm install
```

### Executar o projeto
```bash
# Iniciar o servidor de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na web
npm run web
```

## 📱 Tecnologias utilizadas

- **React Native**: 0.79.6
- **Expo**: ~53.0.22
- **React**: 19.0.0
- **TypeScript**: ~5.8.3
- **Axios**: ^1.11.0 (para requisições HTTP)
- **Styled Components**: ^6.1.19 (para estilização)

## 📁 Estrutura do projeto

```
DesafioTaak/
├── App.tsx              # Componente principal da aplicação
├── app.json             # Configurações do Expo
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração do TypeScript
├── assets/              # Recursos estáticos (imagens, fontes, etc.)
├── src/                 # Código fonte da aplicação
│   ├── components/      # Componentes reutilizáveis
│   ├── screens/         # Telas da aplicação
│   ├── services/        # Serviços e APIs
│   ├── utils/           # Utilitários e helpers
│   └── types/           # Definições de tipos TypeScript
└── node_modules/        # Dependências instaladas
```

## 🔧 Scripts disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm run android`: Executa no emulador/dispositivo Android
- `npm run ios`: Executa no simulador/dispositivo iOS
- `npm run web`: Executa na versão web

## 📱 Como testar

1. Instale o aplicativo **Expo Go** no seu dispositivo móvel
2. Execute `npm start` no terminal
3. Escaneie o QR code que aparecerá no terminal com o app Expo Go
4. O aplicativo será carregado no seu dispositivo

## 🛠️ Desenvolvimento

O arquivo principal da aplicação é `App.tsx`. Você pode começar a desenvolver editando este arquivo.

### Estrutura de pastas recomendada:

- **`src/components/`**: Componentes reutilizáveis (ex: Button, Card, etc.)
- **`src/screens/`**: Telas da aplicação (ex: HomeScreen, ProfileScreen, etc.)
- **`src/services/`**: Serviços e APIs (ex: api.ts, auth.ts, etc.)
- **`src/utils/`**: Utilitários e helpers (ex: formatters.ts, validators.ts, etc.)
- **`src/types/`**: Definições de tipos TypeScript (ex: index.ts)

### Exemplo de uso:

O projeto já inclui exemplos completos de:

- **Componente Button**: `src/components/Button.tsx` - Componente reutilizável com TypeScript
- **Styled Components**: `src/components/StyledComponents.tsx` - Biblioteca de componentes estilizados
- **API Service**: `src/services/api.ts` - Configuração do Axios com interceptors
- **Example Screen**: `src/screens/ExampleScreen.tsx` - Tela demonstrando Axios + Styled Components

### Funcionalidades demonstradas:

- ✅ Requisições HTTP com Axios (GET, POST, PUT, DELETE)
- ✅ Interceptors para logs e tratamento de erros
- ✅ Componentes estilizados com props dinâmicas
- ✅ Estados de loading e tratamento de erros
- ✅ Filtros e busca em tempo real
- ✅ Variantes de componentes (primary, secondary, danger)
- ✅ Badges e indicadores visuais
