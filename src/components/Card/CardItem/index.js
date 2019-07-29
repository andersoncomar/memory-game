import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { CardItemContainer } from './styles';

function CardItem(props) {
  const { onPress, backgroundColor, showing } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      {showing !== 0 ? (
        <CardItemContainer style={{ backgroundColor }} />
      ) : (
        <CardItemContainer />
      )}
    </TouchableOpacity>
  );
}

CardItem.propTypes = {
  showing: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CardItem;
