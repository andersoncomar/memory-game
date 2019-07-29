# Jogo da Memória

App desenvolvido em React Native com intuito de demonstrar as funcionalidades de manipulação dos estados de componentes.

Abaixo as bibliotecas que foram utilizadas para criação do projeto:

Para manipulação de estados dos componentes:
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://github.com/redux-saga/redux-saga)
- [PropTypes](https://github.com/facebook/prop-types)

Para estilização dos componentes foi utilizado:
- [Styled-components](https://www.styled-components.com/)
- [LinearGradient](https://github.com/react-native-community/react-native-linear-gradient)
- [Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html)

Para embaralhar as cards:
- [Shuffle Array](https://www.npmjs.com/package/shuffle-array)

Para persistência de dados simples:
- [React Native Async Storage](https://github.com/react-native-community/async-storage)

Ferramenta de análise de código estático:
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

Style Guide utilizada:
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

Biblioteca para reescrever classes de suporte para equivalentes AndroidX
- [React Native Jetifier](https://www.npmjs.com/package/jetifier)

## Instalação

Use o Gerenciador de Pacotes [Yarn](https://yarnpkg.com/pt-BR/) para instalar as dependências.

```bash
yarn install
```

## Para executar o App

### No iOS

```javascript
react-native run-ios
```

### No Android

```javascript
react-native run-android
```

### Caso de erro tentar executar o comando para limpeza de cache

```javascript
react-native start --reset-cache
```
