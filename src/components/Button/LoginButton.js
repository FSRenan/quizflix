import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Button } from 'react-native';

export default class LoginButton extends React.Component {  

  static propTypes = { 
    buttonTitle: PropTypes.string.isRequired,
    color: PropTypes.string,
  };

  static defaultProps = {
    color: '#CCC',
  }

  defaultPro

  render() {
    const {buttonTitle} = this.props;
    
    return (
      <Button
        //onPress={onPressLearnMore}
        styles={styles.buttonLogin}
        title={buttonTitle}
        color={color}
      />
    );
  }
}

const styles = StyleSheet.create({
  buttonLogin: {
    width: '300px',
    borderRadius: 5,
  },
});



  

