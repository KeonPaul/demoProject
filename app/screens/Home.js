import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
    render() {
        const {navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menux.</Text>
            <Button title='Go to Screen Two'onPress={ () => navigate('screen2') }/>
            <Button title='Open Drawer'  onPress={()=>{this.props.navigation.navigate('DrawerOpen')}} />
         </View>
         
        );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });