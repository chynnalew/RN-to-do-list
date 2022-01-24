import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const ToDoItem = props => {
    const[check, setCheck] = React.useState(false);

    return(
        <View style={styles.screen}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
            <BouncyCheckbox value={check} onValueChange={()=>setCheck(!check)}/>
            <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} style={styles.button}>
                <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor: '#eee',
        borderWidth:1,
        width: '60%',
    },
    screen:{
        flexDirection: 'row',
        marginTop:30,
        justifyContent: 'space-between',
        width: '100%'
    },
    button:{
        display: 'flex',
        height: 40,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonGreen:{
        display:'flex',
        height:40,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: 'white'
    }
})

export default ToDoItem;