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
    {id: "1", nome: "X-Rachel", preco: "R$: 15.00", descricao:"descrição: Pão, hamburguer, queijo, presunto, ovo, alface, tomate, bacon, calabresa.", imagem: require('./assets/image/XTudao.png')},
    {id: "2", nome: "Aquele com as batatas", preco: "R$: 28.00", descricao: "descrição: Batata, cheddar, bacon.", imagem: require('./assets/image/Batata.png')},
    {id: "3", nome: "Kibe explosivo da Mônica", preco: "R$: 18.00", descricao: "descrição: Kibe e queijo.", imagem: require('./assets/image/kibe.png')},
    {id: "4", nome: "Especial Ross", preco: "R$: 17.00", descricao:"descrição: Pão, hamburguer, frango frito, molho da casa, salada, bacon, calabresa.", imagem: require('./assets/image/especial.png')},
    {id: "5", nome: "Salada's Joey", preco: "R$: 22.00", descricao:"descrição: Alface, proteína (frango, peixe ou carne bovina), tomate, cebola, molho natural, pão em cubos.", imagem: require('./assets/image/salada.png')},
    {id: "6", nome: "Frango Phoebe", preco: "R$: 19.00", descricao: "descrição: Frango frito em tiras, 2 opções de molho de sua preferência (maionese verde, mostarda ou barbecue).", imagem: require('./assets/image/frango.png')},
    {id: "7", nome: "Aquele com o pastel", preco: "R$: 10.00", descricao:"descrição: Pastel recheado com sabor de sua preferência, acompanhado de mulho verde", imagem: require('./assets/image/pastel.png')},
    {id: "8", nome: "Coca-Cola", preco: "R$: 7.00", descricao:"descrição: Refrigerante de lata.", imagem: require('./assets/image/coca.png')},
    {id: "9", nome: "Soda Italiana do Chandler", preco: "R$: 10.00", descricao:"descrição: Xarope do sabor de sua preferência (frutes vermelhas ou maça verde), água com gás gelada (ou água tônica) e gelo a gosto.", imagem: require('./assets/image/soda.png')},
    {id: "10", nome: "Suco Unagi", preco: "R$: 6.00", descricao:"descrição: Água, polpa de suco de sua preferência (laranja, abacaxí, abacaxí com hortelã, acerola) e açúcar.", imagem: require('./assets/image/suco.png')},
    {id: "11", nome: "Água", preco: "R$: 2.00", descricao: "descrição: Água mineral de garrafa (com ou sem gás).", imagem: require('./assets/image/agua.png')},
    {id: "12", nome: "Pavê da Rachel", preco: "R$: 12.00", descricao:"descrição: Chocolate, creme de ninho, bolacha.", imagem: require('./assets/image/pave.png')},
    {id: "13", nome: "Bolo do Ross", preco: "R$: 8.00", descricao:"descrição: Bolo de chocolate com cobertura de geleia de morango.", imagem: require('./assets/image/bolo.png')},
    {id: "14", nome: "X-Pivot", preco: "R$: 16.00", descricao:"descrição: Pão, salsicha, molho verde, calabresa, batata palha, milho, cheddar.", imagem: require('./assets/image/lanche.png')},
    {id: "15", nome: "Cerveja Chandler", preco: "R$: 6.00", descricao:"descrição: Bebiba alcoolica.", imagem: require('./assets/image/cerveja.png')},
];

const renderItem = ({ item }: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{ item.nome }</Text>
        <Text style={styles.text}>{ item.preco }</Text>
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
        marginHorizontal: 110,
        color: '#84349c'
    },
    imagemF: {
        flex: 1,
        justifyContent: 'space-around'
    }
});

export default Cardapio;