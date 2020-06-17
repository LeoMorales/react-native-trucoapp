import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>TrucoApp</Text>
            <Button
                title="Jugar"
                type="outline"
                style={styles.button}
                onPress={() => navigation.navigate('Juego')}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    button: {
        marginRight: 10,
        marginLeft: 10
    },
    titulo: {
        textAlign: 'center'
    },
    
});


export default HomeScreen;