import React from 'react';
import { StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types'

export default class LoginButton extends React.Component {  

  LoginButton.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
  }

  render() {
    const {buttonTitle} = this.props;
    
    return (
      <Button
        //onPress={onPressLearnMore}
        styles={styles.buttonLogin}
        title={buttonTitle}
        color="#0000FF" 
      />
    );
  }
}

const styles = StyleSheet.create({
  buttonLogin: {
    width: '300px',
    borderRadius: '5px',
  },
});



  

