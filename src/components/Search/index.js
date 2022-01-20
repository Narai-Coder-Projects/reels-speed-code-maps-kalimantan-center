import React from "react";
import { TextInput, View, StyleSheet, Image } from 'react-native';
import { IconMic, IconLogo } from '../../assets'

const Search = () => {
    return (
        <>
            <View style={styles.flex}>
                <TextInput style={styles.input}
                    placeholder="Cari kota"
                    placeholderTextColor='#7A7A7D'
                />
            </View>
            <View style={styles.icon} >
                <View >
                    <Image style={styles.imgMic} source={IconMic} />
                </View>
                <View>
                    <Image style={styles.imgLogo} source={IconLogo} />
                </View>
            </View>
        </>
    )
}
export default Search;
const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    input: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginLeft: 14,
        paddingHorizontal: 10,
        fontSize: 14
    },
    imgMic: {
        height: 25,
        width: 25
    },
    imgLogo: {
        height: 40,
        width: 40
    },
    icon: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginRight: 14,
        paddingHorizontal: 8,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    }
})
