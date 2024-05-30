import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function GridTile({ title, color, onPress }) {
    return <View style = {[styles.gridItem, {backgroundColor: color}]}>
        <Pressable android_ripple={{color: '#ccc'}} style = {styles.button} 
        onPress={onPress}>
            <View style={styles.innerConatiner}>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default GridTile


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 0.25},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : ''
    },
    button: {
        flex: 1
    },
    innerConatiner: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
})