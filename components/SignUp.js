// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { Switch} from 'react-native'

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  // TODO: Firebase stuff...
  console.log('handleSignUp')
}
render() {
    return (

        
      <View style={styles.container}>

        <Text style ={styles.inscription}
        >Inscription</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}

        <Text>
            Prénom
        </Text>
        <TextInput
          placeholder="Prénom"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={prenom => this.setState({ prenom })}
          value={this.state.prenom}
        />

<Text>
            Nom
        </Text>
<TextInput
          placeholder="Nom"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={nom => this.setState({ nom })}
          value={this.state.nom}
        />

<Text>
            Sexe
        </Text>
<TextInput
          placeholder="Sexe"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={sexe => this.setState({ sexe })}
          value={this.state.sexe}
        />

<Text>
            Date de naissance
        </Text>

<TextInput
          placeholder="Date de naissance"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={sexe => this.setState({ sexe })}
          value={this.state.sexe}
        />

<Text>
            Mail
        </Text>

<TextInput
          placeholder="Mail"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={mail => this.setState({ mail })}
          value={this.state.mail}
        />

<Text>
            Mot de passe
        </Text>

        <TextInput
          secureTextEntry
          placeholder="Mot de passse"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

<Text>
           Confirmation de mot de passe
        </Text>

<TextInput
          secureTextEntry
          placeholder="Confirmation mot de passe"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <Button title="S'inscrire" onPress={this.handleSignUp} />
        <Button
          title="Vous avez deéjà un compte ? Connexion"
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
    backgroundColor :'white'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: '#E4E4E4',
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius:10,
    marginTop: 8
  },
  inscription:{
      width :'100%',
    backgroundColor:'#F96155',
    fontSize:50,
    textAlign:'center',
    color:'white',

  }
})