import './config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import store from '~/store';

import Routes from './routes';
import { setNavigator } from '~/services/navigation';

import { Background } from '~/components/Background/styles';

const App = () => {
  return (
    <Provider store={store}>
      <Background>
        <StatusBar barStyle="light-content" />
        <Routes ref={setNavigator} />
      </Background>
    </Provider>
  );
};

export default App;
