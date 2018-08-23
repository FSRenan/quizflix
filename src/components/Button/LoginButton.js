import React from 'react';
import { StyleSheet, Button } from 'react-native';

export default class LoginButton extends React.Component {  

  render() {
    let {buttonTitle} = this.props;
    
    return (
      <Button
        //onPress={onPressLearnMore}
        title={buttonTitle}
        color="#0000FF"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
  
}


  

