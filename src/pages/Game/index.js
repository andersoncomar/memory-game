import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as GameActions } from '~/store/ducks/game';

import Card from '~/components/Card';

import ScoreBoard from '~/components/ScoreBoard';
import Footer from '~/components/Footer';

import { Container } from './styles';

class Game extends Component {
  static propTypes = {
    loadShuffleRequest: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { loadShuffleRequest } = this.props;

    loadShuffleRequest();
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <ScoreBoard />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Container>
              <Card />
            </Container>
          </ScrollView>
        </SafeAreaView>
        <Footer />
      </>
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
)(Game);
