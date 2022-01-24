import React from 'react';
import {Image, StyleSheet} from 'react-native';

const DisplayImage = props => {
    if(props.taskStatus.length <1) {
        return (
            <Image style={styles.image} source={require('../assets/tick.png')}/>
        )
    } else {
        return null;
    }
}
const styles = StyleSheet.create({
    image: {
        width:250,
        height: 150,
        margin: 'auto',
        marginTop: 10,
    }
})

export default DisplayImage;