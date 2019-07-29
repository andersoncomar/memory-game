import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as GameActions } from '~/store/ducks/game';

import { navigate } from '~/services/navigation';

import { Container, ScoreItem, ScoreText, Header } from './styles';

class Score extends Component {
  static propTypes = {
    game: PropTypes.shape({
      highScores: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          username: PropTypes.string,
          numTurns: PropTypes.number,
        })
      ).isRequired,
    }).isRequired,
    scoreLoadRequest: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { scoreLoadRequest } = this.props;

    scoreLoadRequest();
  }

  handleBackGame() {
    navigate('Game');
  }

  render() {
    const { game } = this.props;
    console.tron.log(game.highScores);
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header>
            <ScoreText>Placares</ScoreText>
            <TouchableOpacity onPress={() => this.handleBackGame()}>
              <Icon name="game-controller" size={40} color="#191970" />
            </TouchableOpacity>
          </Header>
          <Container>
            {game.highScores.map(score => (
              <ScoreItem key={score.id}>
                <ScoreText>Nome: {score.username}</ScoreText>
                <ScoreText>Rodadas: {score.numTurns}</ScoreText>
              </ScoreItem>
            ))}
          </Container>
        </ScrollView>
      </SafeAreaView>
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
)(Score);
