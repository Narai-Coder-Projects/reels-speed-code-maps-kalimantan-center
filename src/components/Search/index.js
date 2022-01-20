import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { IconLogo, IconMic } from '../../assets';

const Search = () => {
    return (
        <>
            <View style={styles.flex}>
                <TextInput style={styles.input}
                    placeholder="Cari alamat"
                    placeholderTextColor="#7A7A7D"
                />
            </View>
            <View style={styles.logoSearch}>
                <View style={styles.margin}>
                    <Image style={[styles.imgMic, styles.zIndex]} source={IconMic} />
                </View>
                <View style={styles.margin}>
                    <Image style={[styles.img, styles.zIndex]} source={IconLogo} />
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
    margin: {
        marginHorizontal: 8
    },
    img: {
        height: 40,
        width: 40,
    },
    imgMic: {
        height: 25,
        width: 25,
    },
    input: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginLeft: 14,
        paddingHorizontal: 10,
        fontSize: 14
    },
    logoSearch: {
        backgroundColor: '#ffff',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 14,
        paddingHorizontal: 8,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
})
