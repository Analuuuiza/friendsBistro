import React from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface Item {
    id: string;
    nome: string;
    preco: string;
    descricao: string;
    imagem: any;
}

const dados: Item[] = [
    {id: "1", nome: "𝚇-𝚁𝚊𝚌𝚑𝚎𝚕", preco: "R$: 15.00", descricao:"descrição: Pão, hamburguer, queijo, presunto, ovo, alface, tomate, bacon, calabresa.", imagem: require('./assets/image/XTudao.png')},
    {id: "2", nome: "𝙰𝚚𝚞𝚎𝚕𝚎 𝚌𝚘𝚖 𝚊𝚜 𝚋𝚊𝚝𝚊𝚝𝚊𝚜", preco: "R$: 28.00", descricao: "descrição: Batata, cheddar, bacon.", imagem: require('./assets/image/Batata.png')},
    {id: "3", nome: "𝙺𝚒𝚋𝚎 𝚎𝚡𝚙𝚕𝚘𝚜𝚒𝚟𝚘 𝚍𝚊 𝙼𝚘̂𝚗𝚒𝚌𝚊", preco: "R$: 18.00", descricao: "descrição: Kibe e queijo.", imagem: require('./assets/image/kibe.png')},
    {id: "4", nome: "𝙴𝚜𝚙𝚎𝚌𝚒𝚊𝚕 𝚁𝚘𝚜𝚜", preco: "R$: 17.00", descricao:"descrição: Pão, hamburguer, frango frito, molho da casa, salada, bacon, calabresa.", imagem: require('./assets/image/especial.png')},
    {id: "5", nome: "𝚂𝚊𝚕𝚊𝚍𝚊'𝚜 𝙹𝚘𝚎𝚢", preco: "R$: 22.00", descricao:"descrição: Alface, proteína (frango, peixe ou carne bovina), tomate, cebola, molho natural, pão em cubos.", imagem: require('./assets/image/salada.png')},
    {id: "6", nome: "𝙵𝚛𝚊𝚗𝚐𝚘 𝙿𝚑𝚘𝚎𝚋𝚎", preco: "R$: 19.00", descricao: "descrição: Frango frito em tiras, 2 opções de molho de sua preferência (maionese verde, mostarda ou barbecue).", imagem: require('./assets/image/frango.png')},
    {id: "7", nome: "𝙰𝚚𝚞𝚎𝚕𝚎 𝚌𝚘𝚖 𝚘 𝚙𝚊𝚜𝚝𝚎𝚕", preco: "R$: 10.00", descricao:"descrição: Pastel recheado com sabor de sua preferência, acompanhado de mulho verde", imagem: require('./assets/image/pastel.png')},
    {id: "8", nome: "𝙲𝚘𝚌𝚊-𝙲𝚘𝚕𝚊", preco: "R$: 7.00", descricao:"descrição: Refrigerante de lata.", imagem: require('./assets/image/coca.png')},
    {id: "9", nome: "𝚂𝚘𝚍𝚊 𝙸𝚝𝚊𝚕𝚒𝚊𝚗𝚊 𝚍𝚘 𝙲𝚑𝚊𝚗𝚍𝚕𝚎𝚛", preco: "R$: 10.00", descricao:"descrição: Xarope do sabor de sua preferência (frutes vermelhas ou maça verde), água com gás gelada (ou água tônica) e gelo a gosto.", imagem: require('./assets/image/soda.png')},
    {id: "10", nome: "𝚂𝚞𝚌𝚘 𝚄𝚗𝚊𝚐𝚒", preco: "R$: 6.00", descricao:"descrição: Água, polpa de suco de sua preferência (laranja, abacaxí, abacaxí com hortelã, acerola) e açúcar.", imagem: require('./assets/image/suco.png')},
    {id: "11", nome: "𝙰́𝚐𝚞𝚊", preco: "R$: 2.00", descricao: "descrição: Água mineral de garrafa (com ou sem gás).", imagem: require('./assets/image/agua.png')},
    {id: "12", nome: "𝙿𝚊𝚟𝚎̂ 𝚍𝚊 𝚁𝚊𝚌𝚑𝚎𝚕", preco: "R$: 12.00", descricao:"descrição: Chocolate, creme de ninho, bolacha.", imagem: require('./assets/image/pave.png')},
    {id: "13", nome: "𝙱𝚘𝚕𝚘 𝚍𝚘 𝚁𝚘𝚜𝚜", preco: "R$: 8.00", descricao:"descrição: Bolo de chocolate com cobertura de geleia de morango.", imagem: require('./assets/image/bolo.png')},
    {id: "14", nome: "𝚇-𝙿𝚒𝚟𝚘𝚝", preco: "R$: 16.00", descricao:"descrição: Pão, salsicha, molho verde, calabresa, batata palha, milho, cheddar.", imagem: require('./assets/image/lanche.png')},
    {id: "15", nome: "𝙲𝚎𝚛𝚟𝚎𝚓𝚊 𝙲𝚑𝚊𝚗𝚍𝚕𝚎𝚛", preco: "R$: 6.00", descricao:"descrição: Bebiba alcoolica.", imagem: require('./assets/image/cerveja.png')},
]; 

const renderItem = ({ item }: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{ item.nome }</Text>
        <Text style={styles.text1}>{ item.preco }</Text>
        <Text style={styles.text}>{ item.descricao }</Text>
        <Image source={item.imagem} style={styles.foto}></Image>
    </TouchableOpacity>
);


function Cardapio(): React.JSX.Element {
    return (

        <View style={styles.container}>
            <ImageBackground source={require('./assets/image/friends.png')} style={styles.imagemF}>
            <StatusBar backgroundColor="#FFE337" barStyle='light-content'/>
            <View style={styles.header}>
                <Image source={require('./assets/image/logo.png')} style={styles.image}/>
            </View>
            <FlatList 
            showsVerticalScrollIndicator={true}
            data={dados}
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

const styles = StyleSheet.create ({
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