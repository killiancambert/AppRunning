
// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log('handleLogin')
  }
  render() {
    return (
      <View style={styles.container}>
         
        <Text
        style={styles.title}>
            Connexion

        </Text>

        <Text 
        style={styles.underTitle} >

            Connectez vous pour démarrer une expérience hors du commun ! 
            
        </Text>
        
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Mot de passe"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button style={styles.buttonConnexion } title="Connexion" onPress={this.handleLogin} />

        <Button
          title="Vous n'avez pas de compte ? Inscrivez vous !"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor :'#F96155'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'white',
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius:10,
    marginTop: 8
  },
  title:{
      fontSize:40,
      color:'white',
      marginBottom:30
  },
  underTitle:{
    fontSize:20,
    color:'white',
    marginBottom:30,
    textAlign:"center"
},
buttonConnexion:{
    color: 'white',
    backgroundColor:'white',

}

})
