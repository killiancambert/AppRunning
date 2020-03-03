// Components/connexion.js
import React from 'react'
import { View, TextInput, Button,Image } from 'react-native'

class Connexion extends React.Component {
    render() {
        return (
            <View style={styles.view}>

            {/* View for the logo */}

                <View style={{ height: 100, width: 100, backgroundColor: 'red' }} >
                <TextInput placeholder='LOGO'/>
                </View>

            {/* View for the  text */}

            <View style={{ height: 250, width:250 , backgroundColor: 'blue' }} >
                <TextInput placeholder='Connexion and little text'/>
                </View>

            {/* View for the form*/}

            <View style={{ height: 100, width: 100, backgroundColor: 'red' }} >
               
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Mot de passe'/>

            </View>

              {/* View for the button */}

            <View >
               
        <Button style = 'backgroundColor' title='Se Connecter' onPress={() => {}}/>
            </View>

     
    
      </View>
        )
    }
}

const styles = {

    view: {
        flex:1,
        backgroundColor :'#F96155',
        justifyContent: 'center',
        alignItems : 'center',
      },

    placeholder :{
        justifyContent : 'center'
    }

}

export default Connexion