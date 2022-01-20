import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconMin, IconPlus } from '../../assets'

const Button = ({ secondary }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.img} source={secondary === 'IconMin' ? IconMin : IconPlus} />
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    img: {
        width: 25,
        height: 25,
        zIndex: 10,
    },
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 100,
        marginBottom: 10
    }

})
