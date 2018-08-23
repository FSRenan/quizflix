import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Button } from 'react-native';

export default class LoginButton extends React.Component {  

  static propTypes = { buttonTitle: React.PropTypes.string.isRequired };

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
    borderRadius: 5,
  },
});



  

