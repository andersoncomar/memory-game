import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { navigate } from '~/services/navigation';

import { Creators as GameActions } from '~/store/ducks/game';

import { Container, ButtonNewGame, ButtonScore, NewGameTitle } from './styles';

class Footer extends Component {
  static propTypes = {
    newGame: PropTypes.func.isRequired,
  };

  handleNewGame() {
    const { newGame } = this.props;

    newGame();
  }

  handleScore() {
    navigate('Score');
  }

  render() {
    return (
      <Container>
        <ButtonNewGame onPress={() => this.handleNewGame()}>
          <Icon name="game-controller" size={40} color="#fff" />
          <NewGameTitle>Novo Jogo</NewGameTitle>
        </ButtonNewGame>
        <ButtonScore onPress={() => this.handleScore()}>
          <Icon name="screen-tablet" size={40} color="#fff" />
          <NewGameTitle>Placar</NewGameTitle>
        </ButtonScore>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GameActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
