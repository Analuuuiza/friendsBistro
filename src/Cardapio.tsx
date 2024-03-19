import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface Item {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    imagem: any;
}

const dados: Item[] = [
    {id: "1", nome: "X-Rachel", preco: "R$:15.00", ingredientes:"Pão, hamburguer, queijo, presunto, ovo, alface, tomate, bacon, calabresa", imagem: require('./assets/image/XTudao.png')},
    {id: "2", nome: "Aquele com as batatas", preco: "R$:28.00", ingredientes: "batata, cheddar, bacon", imagem: require('./assets/image/Batata.png')},
    {id: "3", nome: "Kibe explosivo da Mônica", preco: "R$18.00", ingredientes: "Kibe e queijo", imagem: require('./assets/image/kibe.png')},
    {id: "4", nome: "Especial Ross", preco: "R$:17.00", ingredientes:"Pão, hamburguer, frango frito, molho da casa, salada, bacon, calabresa", imagem: require('./assets/image/especial.png')},
    {id: "5", nome: "Salada's Joey", preco: "R$:22.00", ingredientes:"Folha de sua preferência, proteína de sua preferência, tomate, cebola, molho natural, pão em cubos", imagem: require('./assets/image/salada.png')},
    {id: "6", nome: "Frango Phoebe", preco: "R$:19.00", ingredientes: "Frango frito em tiras, 2 opções de molho de sua preferência", imagem: require('./assets/image/frango.png')},
    {id: "7", nome: "Aquele com o pastel", preco: "R$:10.00", ingredientes:"Pastel recheado com sabor de sua preferência, acompanhado de mulho verde", imagem: require('./assets/image/pastel.png')},
    {id: "8", nome: "Coca-Cola 1L", preco: "R$:7.00", ingredientes:"Refrigerante de 1L", imagem: require('./assets/image/coca.png')},
    {id: "9", nome: "Soda Italiana do Chandler", preco: "R$:10.00", ingredientes:"Xarope do sabor de sua preferência, água com gás gelada (ou água tônica) e gelo a gosto", imagem: require('./assets/image/soda.png')},
    {id: "10", nome: "Suco Unagi", preco: "R$:6.00", ingredientes:"Água, polpa de suco de sua preferência e açúcar", imagem: require('./assets/image/suco.png')},
    {id: "11", nome: "Água", preco: "R$:2.00", ingredientes: "Água mineral de garrafa", imagem: require('./assets/image/agua.png')},
    {id: "12", nome: "Pavê da Rachel", preco: "R$:12.00", ingredientes:"chocolate, creme de ninho, bolacha", imagem: require('./assets/image/pave.png')},
    {id: "13", nome: "Bolo do Ross", preco: "R$:8.00", ingredientes:"bolo de chocolate com cobertura de geleia de morango", imagem: require('./assets/image/bolo.png')},
    {id: "14", nome: "X-Pivot", preco: "R$:16.00", ingredientes:"Pão, salsicha, molho verde, calabresa, batata palha, milho, cheddar", imagem: require('./assets/image/lanche.png')},
    {id: "15", nome: "Cerveja Chandler", preco: "R$:6.00", ingredientes:"bebiba alcoolica", imagem: require('./assets/image/cerveja.png')},
];

const renderItem = ({ item }: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text>{ item.nome }</Text>
        <Text>{ item.preco }</Text>
        <Text>{ item.ingredientes }</Text>
        <Image source={item.imagem}></Image>
    </TouchableOpacity>
);


function Cardapio(): React.JSX.Element {
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor="#FFE337" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Friends Bistrô</Text>
            </View>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />

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
        backgroundColor: '#FFB51B'
    },
    header: {
        backgroundColor: '#FFE337',
        alignItems: 'center',
        paddingVertical: 10
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#F28705'
    },
    item: {
        backgroundColor: "#F7E855",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    }
});

export default Cardapio;