import React, {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Button , 
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import Colors from '../constants/color'
import Card from '../components/Cards'
import Input from '../components/Input'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }; 
    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
           <Text style={styles.title}>Start a New Game!</Text>            
           <Card style={styles.inputContainer}>
               <Text>Select a Number</Text>
               <Input style={styles.input} 
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2}></Input>
               <View style={styles.buttonContainer}>
                   <View style={styles.button}>
                        <Button title="Reset" onPress={() => {}} color={Colors.accent}></Button>
                   </View>
                    <View style={styles.button}>
                        <Button title="Confirm" onPress={() => {}} color={Colors.primary}></Button>
                    </View>
                    
               </View>
           </Card>
        </View>
        </TouchableWithoutFeedback>
        
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        paddingTop: 10,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8, // boxshadow for Android
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button:{
        width: 100,
    },
    input:{
        width: 50,
        textAlign: 'center'
    }
})
export default StartGameScreen