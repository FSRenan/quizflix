import React from 'react';
import { StyleSheet, Button } from 'react-native';

export default class Button extends React.Component {

    constructor(props){
        super(props);
        }    

  render() {
    return (
      <Button style={styles.Button}>
        { props.buttonName }
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#4136bB',
    color: '#FFFFFF',
    fontSize: '18px',
    width: '332px',
  },
  
});
