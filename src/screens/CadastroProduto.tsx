import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const cadastrarProduto = async () => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('ingredientes', ingredientes);
        formData.append('imagem', {
            uri: imagem,
            type: 'image/jpeg',
            name: new Date() + '.jpeg'
        });

        const response = await axios.post('http://10.137.11.229:8000/api/produtos', formData ,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

    }catch(error) {
            console.log(error);
        }

    }

    const abrirCamera = () => {
        const options = {
            mediaTtpe: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidht: 2000
        };

        launchCamera(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuário');
            } else if(response.error){
                console.log('erro ao abrir a camera');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        })
    }

    const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response)=>{
            if(response.didCancel){
                console.log('cancelado pelo usuário');
            } else if(response.error){
                console.log('erro ao abrir a galeria');
            } else{
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        });
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/image/friends.png')} style={styles.imagemF}> 
            <StatusBar backgroundColor="#FFE337" barStyle="light-content" />
            <View style={styles.header}>
            <Image source={require('../assets/image/logo.png')} style={styles.image}/>
            </View>
            
            <ScrollView>
            <View style={styles.form}>
            <Text style={styles.title}>Cadastro de Produtos</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Produto"
                    value={nome}
                    onChangeText={setNome} />
                <TextInput
                    style={styles.input}
                    placeholder="Preço"
                    value={preco}
                    onChangeText={setPreco} />
                <TextInput 
                    style={styles.input}
                    placeholder="Ingredientes"
                    value={ingredientes}
                    onChangeText={setIngredientes} 
                    multiline />
                <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> : null}
                </View>
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={cadastrarProduto}>
                    <Text style={styles.buttonText}>Cadastrar Produto</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>

            <View style={styles.footer}>
            <TouchableOpacity>
                <Image 
                source={require('../assets/image/home.png')}
                style={styles.footerIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/pedido.png')}
                style={styles.footerIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/perfil.png')}
                style={styles.footerIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/menu.png')}
                style={styles.footerIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../assets/image/iconC.png')}
                style={styles.footerIcon}
                />
            </TouchableOpacity>
            </View>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE337'
    },
    perfil: {
        width: 50,
        height: 50,
        left: 165,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 3,
        color: '#84349c',
        left: 95,
        marginBottom: 10
    },
    header: {
        backgroundColor: '#f3bc04',
        alignItems: 'center'
    },
    image: {
        width: 500,
        height: 110,
        borderRadius: 70
    },
    imagemF: {
        flex: 1,
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 10,
        backgroundColor: '#FFE337',
        marginBottom: 10,
        marginTop: 70,
        borderRadius: 20
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#F7E855',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 130
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#b47cc4'
    },
    imageButton: {
        backgroundColor: '#84349c',
        padding: 10,
        borderRadius:20,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    imageButtonText: {
        color: 'black',
        fontWeight: 'bold'
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#84349c',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold'
    },
});

export default CadastroProduto;