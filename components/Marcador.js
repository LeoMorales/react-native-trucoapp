import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native-elements';

const Marcador = ({ equipo, tantos, onClickButton }) => {
    return (
        <View style={styles.marcador}>
            <Text style={styles.equipo}> { equipo }</Text>
            <Text style={styles.tantos} h1> {tantos}</Text>
            <Button
                icon={
                    <Icon
                        name="plus"
                        size={10}
                        color="sienna"
                    />
                }
                title=""
                type="outline"
                style={styles.button}
                onPress={onClickButton}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    marcador: {
        flexGrow: 1,
        backgroundColor: '#eaddd7',
        borderColor: 'sienna',
        borderRadius: 5,
        borderWidth: 1,
        margin: 5,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        
    },
    equipo: {
        textAlign: "center",
        fontFamily: 'sans-serif-condensed'
    },
    tantos: {
        textAlign: "center",
        fontFamily: 'sans-serif-condensed',

    },
    button: {
        marginRight: 10,
        marginLeft: 10,
        
    }

});

export default Marcador;