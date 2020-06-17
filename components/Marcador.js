import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const Marcador = ({ equipo, tantos }) => {
    return (
        <View style={styles.marcador}>
            <Text style={styles.equipo}> { equipo }</Text>
            <Text style={styles.tantos}> {tantos}</Text>
            <Button
                icon={
                    <Icon
                        name="plus"
                        size={10}
                        color="white"
                    />
                }
                title=""
                type="outline"
                style={styles.button}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    marcador: {
        flexGrow: 1,
        backgroundColor: 'sienna',
        borderColor: 'tomato',
        borderRadius: 5,
        borderWidth: 1,
        margin: 5,
        justifyContent: 'space-around',
        alignItems: 'stretch'

    },
    equipo: {
        textAlign: "center"
    },
    tantos: {
        textAlign: "center",
        fontSize: 20
    },
    button: {
        marginRight: 10,
        marginLeft: 10,
        
    }

});

export default Marcador;