import React, { Component } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as GameActions } from '~/store/ducks/game';

import CardItem from './CardItem';

import { Container } from './styles';

class Card extends Component {
  static propTypes = {
    game: PropTypes.shape({
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          showState: PropTypes.number,
          backgroundColor: PropTypes.string,
        })
      ).isRequired,
    }).isRequired,
    showingRequest: PropTypes.func.isRequired,
  };

  state = {};

  static getDerivedStateFromProps(nextProps) {
    const {
      game,
      hidingRequest,
      matchedRequest,
      incrementTurn,
      incrementPair,
      scoreRequest,
      username,
    } = nextProps;
    const data = game.cards.filter(c => c.showState === 1);

    const ids = data.map(b => b.id);

    if (
      data.length === 2 &&
      data[0].backgroundColor === data[1].backgroundColor
    ) {
      ids.map(id => matchedRequest(id));
      incrementTurn();
      incrementPair();
    } else if (data.length === 2) {
      setTimeout(() => {
        ids.map(id => hidingRequest(id));
        incrementTurn();
      }, 400);
    }

    if (game.matchedPairs === 10) {
      Alert.alert(
        'TEMOS UM VENCEDOR!!!',
        `PARABÉNS ${username}!!! Você conseguiu achar todos os Pares!!! Você fez em ${game.numTurns} Rodadas!`,
        [{ text: 'OK', onPress: () => scoreRequest() }]
      );
    }

    return {
      cachedSomeProp: nextProps.someProp,
    };
  }

  handlePress(id) {
    const { game, showingRequest } = this.props;

    const card = game.cards.find(box => box.id === id);

    if (card === undefined || card.showState !== 0) {
      return;
    }

    showingRequest(id);
  }

  render() {
    const { game } = this.props;
    const { cards } = game;

    return (
      <Container>
        {cards.map(box => (
          <CardItem
            showing={box.showState}
            backgroundColor={box.backgroundColor}
            key={box.id}
            onPress={() => this.handlePress(box.id)}
          />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
  username: state.signIn.username,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GameActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
