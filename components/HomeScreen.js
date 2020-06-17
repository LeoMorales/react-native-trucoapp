import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text h1 style={styles.titulo}>TrucoApp</Text>

            <View style={styles.boton}>
                <Button
                    title="Jugar"
                    type="outline"
                    onPress={() => navigation.navigate('Juego')}
                />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    boton: {
        marginRight: 100,
        marginLeft: 100
    },
    titulo: {
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed'

    },
    
});


export default HomeScreen;