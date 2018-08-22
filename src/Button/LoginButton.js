import React from 'react';
import { StyleSheet, Button } from 'react-native';

export default class LoginButton extends React.Component {  

  render() {
    let {buttonTitle} = this.props;
    
    return (
      <Button
        style={styles.Button}
        //onPress={onPressLearnMore}
        title={buttonTitle}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#4136bB',
    color: '#FFFFFF',
    //fontSize: '18px',
    width: '332px',
  },
  
});
