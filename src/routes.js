import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import Game from '~/pages/Game';
import Score from '~/pages/Score';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    Game,
    Score,
  })
);

export default Routes;
