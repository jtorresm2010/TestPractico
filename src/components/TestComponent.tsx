import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import TestComponentStyles from '../styles/TestComponentStyles'
import { IMAGEN_CERRAR } from '../constantes/imagenes'

enum InputState {
    Default,
    Click,
    Texto,
    Completado
}

const TestComponent = () => {

    // Se establece el estado inicial. A modo de pruebas se debe cambiar manualmente entre cada estado.
    const [inputState, setInputState] = useState(InputState.Completado)

    return (
        <View style={TestComponentStyles.container}>
            {
                inputState === InputState.Default &&
                <View style={TestComponentStyles.defaultContent}>
                    <TextInput
                        placeholder={'Escribe tu correo electrónico'}
                        placeholderTextColor={'#7876B1'}
                        style={TestComponentStyles.TextInputDefault}
                    />

                </View>
            }

            {
                inputState === InputState.Click &&
                <View style={TestComponentStyles.clickContainer}>
                    <View style={TestComponentStyles.clickContent}>
                        <View style={TestComponentStyles.textContainer}>
                            <Text
                                style={TestComponentStyles.usernameText}
                            >Correo electrónico</Text>
                        </View>
                    </View>
                    <View style={TestComponentStyles.TextInputImageContainer}>
                        <Image
                            source={IMAGEN_CERRAR}
                            style={TestComponentStyles.TextInputImage}
                        />
                    </View>
                </View>
            }

            {
                inputState === InputState.Texto &&
                <View style={TestComponentStyles.clickContainer}>
                    <View style={TestComponentStyles.clickContent}>
                        <View style={TestComponentStyles.textContainer}>
                            <Text
                                style={TestComponentStyles.usernameText}
                            >Correo electrónico</Text>
                        </View>
                        <TextInput
                            value='jose@jobchain.com'
                            placeholder={'Escribe tu correo electrónico'}
                            placeholderTextColor={'#7876B1'}
                            style={TestComponentStyles.TextInputText}
                        />
                    </View>
                    <View style={TestComponentStyles.TextInputImageContainer}>
                        <Image
                            source={IMAGEN_CERRAR}
                            style={TestComponentStyles.TextInputImage}
                        />
                    </View>
                </View>
            }

            {
                inputState === InputState.Completado &&
                <View style={TestComponentStyles.clickContainer}>
                    <View style={TestComponentStyles.clickContent}>
                        <View style={TestComponentStyles.textContainer}>
                            <Text
                                style={TestComponentStyles.usernameText}
                            >Correo electrónico</Text>
                        </View>
                        <TextInput
                            value='jose@jobchain.com'
                            placeholder={'Escribe tu correo electrónico'}
                            placeholderTextColor={'#7876B1'}
                            style={TestComponentStyles.TextInputText}
                        />
                    </View>
                </View>
            }
        </View>
    )
}

export default TestComponent