import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Marcador from './Marcador'


const GameScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Partida</Text>
            <View style={styles.tablero}>

                <Marcador
                    equipo="Equipo A"
                    tantos={2}
                ></Marcador>

                <Marcador
                    equipo="Equipo B"
                    tantos={5}
                ></Marcador>

            </View>

        </View>
    );
}


const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start' 
    },
    tablero: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: width - 20,
        height: height - 150
       
    },
    
});

export default GameScreen;