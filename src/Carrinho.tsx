import React from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


interface Item {
    id: string;
    nome: string;
    preco: string;
    descricao: string;
    imagem: any;
}

const dados: Item[] = [
    {id: "1",imagem: require('./assets/image/XTudao.png'), nome: "𝚇-𝚁𝚊𝚌𝚑𝚎𝚕", descricao:"descrição: Pão, hamburguer, queijo, presunto, ovo, alface, tomate, bacon, calabresa.",preco: "R$: 15.00"},
    {id: "2", nome: "𝙰𝚚𝚞𝚎𝚕𝚎 𝚌𝚘𝚖 𝚊𝚜 𝚋𝚊𝚝𝚊𝚝𝚊𝚜", preco: "R$: 28.00", descricao: "descrição: Batata, cheddar, bacon.", imagem: require('./assets/image/Batata.png')},
    {id: "3", nome: "𝙺𝚒𝚋𝚎 𝚎𝚡𝚙𝚕𝚘𝚜𝚒𝚟𝚘 𝚍𝚊 𝙼𝚘̂𝚗𝚒𝚌𝚊", preco: "R$: 18.00", descricao: "descrição: Kibe e queijo.", imagem: require('./assets/image/kibe.png')},
];

const renderItem = ({ item }: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{ item.nome }</Text>
        <View style={{flexDirection:'row'}}>
        <Image source={item.imagem} style={styles.foto}></Image>
        <Text style={styles.text}>{ item.descricao }</Text>
        </View>
        <Text style={styles.text1}>{ item.preco }</Text>
        
       <View style={styles.alinhamentoBotaoCarrinho}>
        <TouchableOpacity>
            <Text style={styles.botaoSomaSubtrai}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <TextInput style={styles.valor}>0</TextInput>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text style={styles.botaoSomaSubtrai}>-</Text>
        </TouchableOpacity>
       </View>
    </TouchableOpacity>
);


function Carrinho(): React.JSX.Element {
    return (

        <View style={styles.container}>
            <ImageBackground source={require('./assets/image/friends.png')} style={styles.imagemF}>
            <StatusBar backgroundColor="#FFE337" barStyle='light-content'/>
            <View style={styles.header}>
                <Image source={require('./assets/image/carrinho.png')} style={styles.image}/>
            </View>
            <FlatList 
            showsVerticalScrollIndicator={true}
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />

        <View>
            <Text style={styles.total}>Total: R$: 76.00 </Text>
            <TouchableOpacity>
            <Text style={styles.final}>Finalizar Pedido</Text>
            </TouchableOpacity>
        </View>
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

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#f3bc04'
    },
    alinhamentoBotaoCarrinho: {
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    botaoSomaSubtrai: {
        fontSize: 30,
        fontWeight: 'bold',
        borderWidth: 1,
         marginLeft: 10,
         borderRadius: 8,
    },
    valor: {
        fontSize: 30,
        padding: 1,
        marginLeft: 10
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
        width: 400,
        height: 100
    },
    foto: {
        width: 150,
        height: 95,
        marginVertical: 3,
        borderRadius: 30
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 3,
        color: '#000000',
        width: 180,
        marginLeft: 10,
        marginTop: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 3,
        color: '#84349c',
        borderBottomWidth: 2,
        borderBottomColor: '#84349c'
    },
    imagemF: {
        flex: 1,
        justifyContent: 'space-around'
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 3,
        color: '#F7E855',
        marginTop: 8
    },
    quant: {
        width: 100,
        height: 25,
        marginVertical: 3,
        left: 200
    },
    total: {
        backgroundColor: "#84349c",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 130,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#84349c',
        borderRadius: 50,
        fontWeight: 'bold',
        color: 'black',
        left: 100
    },
    final: {
        backgroundColor: "#b47cc4",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#84349c',
        borderRadius: 50,
        fontWeight: 'bold',
        color: 'black',
        alignItems: 'center',
        textAlign: 'center'
    }
});

export default Carrinho;