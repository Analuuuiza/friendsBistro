import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from 'axios';

interface Item {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    imagem: any;
}

async function listarProdutos(): Promise<Item[]> {
    try {
        const response = await axios.get<Item[]>('http://10.137.11.229:8000/api/produtos');
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

function Cardapio(): React.JSX.Element {
    const [item, setItem] = useState<Item[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const produtosData: Item[] = await listarProdutos();
                setItem(produtosData)
                console.log(item)
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };
        fetchData();
    }, []);

    const renderItem = ({ item }: { item: Item }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.text}>{item.ingredientes}</Text>
            <Image source={{ uri: item.imagem }} style={styles.foto} />
            <Text style={styles.text1}>{item.preco}</Text>
        </TouchableOpacity>
    );



    return (

        <View style={styles.container}>
            <ImageBackground source={require('./assets/image/friends.png')} style={styles.imagemF}>
                <StatusBar backgroundColor="#FFE337" barStyle='light-content' />
                <View style={styles.header}>
                    <Image source={require('./assets/image/logo.png')} style={styles.image} />
                </View>
                <FlatList
                    data={item}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </ImageBackground>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/image/home.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/image/pedido.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/image/perfil.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/image/menu.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/image/iconC.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3bc04'
    },
    header: {
        backgroundColor: '#f3bc04',
        alignItems: 'center'
    },
    item: {
        backgroundColor: "#b47cc4",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#84349c',
        borderRadius: 50
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#F7E855',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    image: {
        width: 500,
        height: 180,
        borderRadius: 70
    },
    foto: {
        width: 150,
        height: 95,
        marginVertical: 3,
        marginHorizontal: 70,
        borderRadius: 30
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 3,
        color: '#000000'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 3,
        color: '#84349c',
        borderBottomColor: '#84349c',
        borderBottomWidth: 2
    },
    imagemF: {
        flex: 1,
        justifyContent: 'space-around'
    },
    text1: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 3,
        color: '#F7E855'
    }
});

export default Cardapio;