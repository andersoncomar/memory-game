import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as SignInActions } from '~/store/ducks/signIn';

import { Container, Input, Button, ButtonText } from './styles';

class SignIn extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
  };

  handleSubmit = async () => {
    const { username } = this.state;
    const { signInRequest } = this.props;

    if (!username) return;

    signInRequest(username);
  };

  render() {
    const { username } = this.state;
    const { loading } = this.props;

    return (
      <Container>
        <Input
          value={username}
          onChangeText={text => this.setState({ username: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu nome"
          keyboardType="default"
          returnKeyType="send"
        />

        <Button onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFFF" />
          ) : (
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SignInActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
