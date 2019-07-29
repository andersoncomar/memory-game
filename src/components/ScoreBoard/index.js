import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as GameActions } from '~/store/ducks/game';

import { Container, ScoreTitle, NumberTurns, NumberPair } from './styles';

function ScoreBoard(props) {
  const { game } = props;
  const { numTurns, matchedPairs } = game;
  return (
    <Container>
      <ScoreTitle>Pontuação</ScoreTitle>
      <NumberTurns>Contador de Rodadas: {numTurns}</NumberTurns>
      <NumberPair>Pares encontrados: {matchedPairs}</NumberPair>
    </Container>
  );
}

ScoreBoard.propTypes = {
  game: PropTypes.shape({
    numTurns: PropTypes.number.isRequired,
    matchedPairs: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GameActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoard);
