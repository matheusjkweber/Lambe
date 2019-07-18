import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} 
                    placeholder='Email'
                    autoFocus={true}
                    value={this.state.email}
                    keyboardType='email-address'
                    onChangeText={email => this.setState({ email })}/>
                <TextInput style={styles.input} 
                    placeholder='Password'
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}/>
                <TouchableOpacity style={styles.button} onPress={this.login}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Register')
                }}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }
})

export default Login