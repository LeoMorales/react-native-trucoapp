import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import Marcador from './Marcador'


const GameScreen = ({ navigation }) => {

    const [puntajeA, setPuntajeA ] = React.useState(0)
    const [puntajeB, setPuntajeB ] = React.useState(0)

    return (
        <View style={styles.container}>
            <Text h1 style={{ fontFamily: 'Roboto' }}>Partida</Text>
            <View style={styles.tablero}>

                <Marcador
                    equipo="Equipo A"
                    tantos={puntajeA}
                    onClickButton={ () => setPuntajeA(puntajeA +1) }
                ></Marcador>

                <Marcador
                    equipo="Equipo B"
                    tantos={puntajeB}
                    onClickButton={() => setPuntajeB(puntajeB + 1)}
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
        justifyContent: 'flex-start',
    },
    tablero: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: width - 20,
        height: height - 150,       
    },
    
});

export default GameScreen;