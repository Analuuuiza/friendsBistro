import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const CadastroCliente: React.FC = () => {
    const [clientes, setClientes] = useState<Cadastro[]>([]);
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [CPF, setCPF] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');
    const [errors, setErrors] = useState<Record<string, string>>({});


    const validarCampos = () => {
        const errors: Record<string, string> = {};

        if (!imagem) {
            errors.imagem = "A Foto é obrigatória";
        }
        if (!nome) {
            errors.nome = "O nome é obrigatório";
        } 
        if (!endereco) {
            errors.endereco = "O endereço é obrigatório";
        }
        if (!telefone) {
            errors.telefone = "O telefone é obrigatório";
        }
        if (!email) {
            errors.email = "O e-mail é obrigatório";
        }
        if (!CPF) {
            errors.cpf = "O CPF é obrigatório";
        }
        if (!password) {
            errors.password = "A senha é obrigatória";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
        const cadastrarCliente = async () => {
            if (!validarCampos()) {
                return;
            }
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('telefone', telefone);
        formData.append('endereco', endereco);
        formData.append('email', email);
        formData.append('CPF', CPF);
        formData.append('password', password);
        formData.append('imagem', {
            uri: imagem,
            type: 'image/jpeg',
            name: new Date() + '.jpeg'
        });

        const response = await axios.post('http://10.137.11.229:8000/api/cadastros', formData ,{
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
                console.log('cancelado pelo cliente');
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
                console.log('cancelado pelo cliente');
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
                <Text style={styles.title}>Cadastro de Clientes</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome} />{errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone} />{errors.telefone && <Text style={styles.errorText}>{errors.telefone}</Text>}
                <TextInput 
                    style={styles.input}
                    placeholder="Endereço"
                    value={endereco}
                    onChangeText={setEndereco} 
                    multiline />{errors.endereco && <Text style={styles.errorText}>{errors.endereco}</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail} 
                    multiline />{errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                     <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    value={CPF}
                    onChangeText={setCPF} 
                    multiline />{errors.cpf && <Text style={styles.errorText}>{errors.cpf}</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword} 
                    multiline />{errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> : null}
                </View>{errors.imagem && <Text style={styles.errorText}>{errors.imagem}</Text>}
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={cadastrarCliente}>
                    <Text style={styles.buttonText}>Cadastrar Cliente</Text>
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
    errorText: {
        color: '#84349c',
        marginBottom: 5,
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
        marginTop: 20
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

export default CadastroCliente;