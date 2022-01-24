import React from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Alert, Image} from 'react-native';
import Header from './Header';

const ToDoInput = props => {
    const[enteredTask, setEnteredTask] = React.useState("");

    const HandleToDoInput = enteredText => {
        setEnteredTask(enteredText);
    }

    const HandleAddTask = () => {
        props.onAddTask(enteredTask);
        setEnteredTask('');
    }

    const checkInput = enteredTask => {
        if(enteredTask.length > 0){
            HandleAddTask();
        } else {
            Alert.alert('Error', "Please enter a task", [{text: 'OK'}], {cancelable: false})
        }
    }

    return(
        <Modal visible={props.visible} animationType="slide">
            <Header title="To-Do-App"></Header>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Task" style={styles.input} onChangeText={HandleToDoInput} value={enteredTask}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel}></Button>
                    </View>
                    <View style={styles.button}>
                        
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    input:{
        width:'80%',
        borderColor:'black',
        borderWidth: 1,
        padding: 10,
        marginBottom:10
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        width:'60%',
    },
    button:{
        width: '40%'
    }
})

export default ToDoInput;