import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {

    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const [size, setSize] = useState('');
    const [psw, setPsw] = useState('');
    const [res, setRes] = useState(false);

    const gerarPsw = function () {
        let pass = '';
        let n = charset.length;

        if (size < 1 || size > 15 || isNaN(size)) {
            alert('Tamanho da senha inválido');
            setRes(false)
            setSize('');
        } else {
            // copia caracteres aleatórios para a senha
            for (let i = 0; i < size; i++) {
                pass += charset.charAt(Math.floor(Math.random() * n));
            }
            setPsw(pass);
            setRes(true);
        }
    }

    return (
        <View style={estilo.container}> {/* COMPONEnTE PRINCIPAL DO APP */}
            <Image source={require('./src/images/cadeado.png')} // CARREGA IMAGEM
                style={{ width: 200, height: 200 }}></Image>

            <View style={estilo.container2}>

                <Text style={estilo.title}>Caracteres</Text>

                <TextInput
                    style={estilo.input}
                    placeholder="Tamanho da senha (1 a 15)"
                    keyboardType="numeric"
                    value={size}
                    onChangeText={n => setSize(n)}
                ></TextInput>

                <TouchableOpacity style={estilo.botao} onPress={gerarPsw}> {/* BOTÃO PARA GERAR SENHA*/}
                    <Text style={estilo.textBotao}>Gerar Senha</Text>
                </TouchableOpacity>


                {res &&
                    <View style={estilo.result}> {/* COMPONENTE ONDE A SENHA GERADA É EXIBIDA */}
                        <Text style={{fontWeight: 'bold', fontSize: 16}} >{psw}</Text>
                    </View>
                }
            </View>
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 30 }}>Iglisson Ruan e Leonardo Moura</Text>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%'
    },

    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: '5%',
        width: '100%'
    },

    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 15
    },

    input: {
        backgroundColor: '#ddd',
        borderRadius: 10,
        margin: 15,
        padding: 10,
        color: '#000',
        fontSize: 23,
        width: '90%',
        textAlign: 'center'
    },

    botao: {
        padding: 10,
        backgroundColor: '#f29b11',
        borderRadius: 10,
        width: 200,
        textAlign: 'center',
        marginTop: 20
    },

    textBotao: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    result: {
        backgroundColor: '#ddd',
        width: '90%',
        height: 50,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});