// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  // TODO: Firebase stuff...
  console.log('handleSignUp')
}
render() {
    return (
      <View style={styles.container}>
        <Text>Inscription</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Prénom"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={prenom => this.setState({ prenom })}
          value={this.state.prenom}
        />

<TextInput
          placeholder="Nom"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={nom => this.setState({ nom })}
          value={this.state.nom}
        />

        <TextInput
          secureTextEntry
          placeholder="Mot de passse"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
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
  }
})