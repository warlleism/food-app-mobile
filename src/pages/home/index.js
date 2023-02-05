import { Animated, Dimensions, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { CardsContainer, Image, Title } from "../../styled/styled";
import Catalogo from "../../catalogo/catalogo";
import Icon from 'react-native-vector-icons/AntDesign'
import IconOct from 'react-native-vector-icons/Octicons'
import { useEffect, useState } from 'react';

const { width } = Dimensions.get("window")

const Home = () => {

    const [icon, setIcon] = useState(true)
    const [search, setSearch] = useState([])

    const [data, setData] = useState([
        {
            id: 0,
            title: 'início',
        },
        {
            id: 2,
            title: 'salada',
        },
        {
            id: 3,
            title: 'sushi',
        },
        {
            id: 4,
            title: 'pizza',
        },
        {
            id: 5,
            title: 'refeição',
        },
    ]);

    const onClickItem = (item) => {
        const newArrData = data.map((e) => {
            if (item.id == e.id) {
                return {
                    ...e,
                    selected: true
                }
            }

            return {
                ...e,
                selected: false
            }
        })

        setData(newArrData)
    }

    const Item = ({ title, item, index }) => (
        <TouchableOpacity
            onPress={() => {
                filtarArr(title)
                onClickItem(item, index)
            }}
            style={[styles.containerCategoria, { width: item.selected ? 140 : 130, height: item.selected ? 70 : 60 }]}>
            <Text style={[styles.text, { color: item.selected ? '#FF002E' : '#fff', fontSize: item.selected ? 18 : 16 }]}>{title}</Text>
        </TouchableOpacity>
    );

    function filtarArr(param) {
        if (param == 'início') {
            setSearch('')
        } else {
            const filter = Catalogo.filter(e => e.categoria == param)
            setSearch(filter)
        }
    }

    const animation = new Animated.Value(30)

    function onSearch() {
        Animated.spring(animation, {
            toValue: parseInt(width - 100),
            useNativeDriver: false,
        }).start();
        setTimeout(() => {
            setIcon(false)
        }, 200)
    }

    function onOutSearch() {
        Animated.spring(animation, {
            toValue: 30,
            useNativeDriver: false,
        }).start();
        setTimeout(() => {
            setIcon(true)
        }, 200)
    }

    return (
        <ScrollView>

            <View>
                <View style={{
                    display: "flex",
                    width: width - 40,
                    marginTop: 20,
                    alignSelf: "center",
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Animated.View style={{
                        width: animation,
                        height: 40,
                        borderRadius: 10,
                        position: 'relative',
                    }}>
                        <TextInput
                            style={{
                                fontSize: 20,
                                padding: 10,
                                color: '#fff',
                                height: "100%",
                                borderRadius: 10,
                                marginRight: 20,
                                backgroundColor: "#FF002E",
                            }} />

                        <TouchableOpacity
                            onPress={() => onSearch()}
                            style={{
                                top: -6,
                                right: -10,
                                width: 50,
                                height: 50,
                                borderRadius: 30,
                                position: 'absolute',
                                alignItems: "center",
                                justifyContent: 'center',
                                backgroundColor: "#FF002E",
                            }}
                        >
                            {
                                icon
                                    ?
                                    <Icon name="search1" size={31} color={'#fff'} />
                                    :
                                    <Icon name="close" size={31} color={'#fff'} onPress={() => onOutSearch()} />
                            }
                        </TouchableOpacity>

                    </Animated.View>

                    <IconOct name="three-bars" size={37} color={'#FF002E'} />

                </View>
                <View style={{
                    width: width - 30,
                    alignSelf: "center",
                    marginVertical: 20,
                    height: 2,
                    backgroundColor: '#FF002E'
                }}></View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <FlatList
                    numColumns={'10'}
                    data={data}
                    renderItem={({ item, index }) => <Item title={item.title} item={item} index={index} />}
                    keyExtractor={item => item.id}
                />
            </ScrollView>

            <CardsContainer>

                {
                    search.length != 0
                        ?

                        search.map((e) => {
                            return (
                                <View style={[styles.card, { backgroundColor: e.color }]} key={e.id}>
                                    <Image source={e.img} />
                                    <Title>
                                        {e.nome}
                                    </Title>
                                </View>
                            )
                        })
                        :
                        Catalogo.map((e) => {
                            return (
                                <View style={[styles.card, { backgroundColor: e.color }]} key={e.id}>
                                    <Image source={e.img} />
                                    <Title>
                                        {e.nome}
                                    </Title>
                                </View>
                            )
                        })

                }
            </CardsContainer>

        </ScrollView>
    );
}


const styles = StyleSheet.create({

    card: {
        height: 260,
        width: "49%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    containerCategoria: {
        borderRadius: 10,
        alignItems: "center",
        marginHorizontal: 10,
        justifyContent: "center",
        backgroundColor: '#323232',
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        textTransform: 'uppercase'
    }

})

export default Home;