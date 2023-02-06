import { useContext, useState } from "react";
import { Context } from "../../context/provider";
const { View, ScrollView, Text, Image, Dimensions, StyleSheet, TouchableOpacity } = require("react-native")
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window")
const { height } = Dimensions.get("window")

const Detail = () => {

    const Navigation = useNavigation()

    const { dataArray } = useContext(Context)

    const [qtd, setQtd] = useState(1)

    return (
        <ScrollView style={{ backgroundColor: '#282828', height: height }}>
            <View style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",

            }}>
                <Icon onPress={() => Navigation.navigate('Home')} name="arrowleft" size={61} color={'#FF002E'} style={{ marginLeft: 10 }} />

                <View style={styles.containerImgTitle}>
                    <Text style={{
                        fontSize: dataArray.categoria == 'refeição' || 'salada' ? 75 : 100,
                        textTransform: 'uppercase',
                        color: '#939393',
                        fontWeight: '900',
                        letterSpacing: 2,
                    }}>{dataArray?.categoria}</Text>
                    <Image style={{
                        width: width,
                        height: 400,
                    }} source={dataArray?.img} />
                </View>

                <View style={styles.containerContent}>
                    <View style={{ width: "90%", alignSelf: "center" }}>
                        <View style={styles.containerIcon}>
                            <Image style={styles.icon} source={require('../../images/icons/icon1.png')} />
                            <Image style={styles.icon} source={require('../../images/icons/icon2.png')} />
                            <Image style={styles.icon} source={require('../../images/icons/icon3.png')} />
                            <Image style={styles.icon} source={require('../../images/icons/icon4.png')} />
                        </View>
                        <View style={{ width: "100%", height: 5, backgroundColor: "#FF002E", alignSelf: 'center', marginVertical: 20 }}></View>
                        <Text style={{ fontSize: 12, width: "100%", alignSelf: "center", color: "#7F7A7A" }}>{dataArray.desc}</Text>
                        <View style={styles.containerQTD}>

                            <TouchableOpacity style={styles.operation} onPress={() => setQtd(qtd - 1)}>
                                <Text style={styles.operationText}>-</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    fontSize: 20,
                                    textAlignVertical: "center",
                                    color: "#fff",
                                    marginHorizontal: 10
                                }}>
                                <Text
                                    style={{
                                        color: "#FF002E",
                                        fontSize: 20,
                                        fontWeight: "900",
                                        marginBottom: 5
                                    }}>
                                    {qtd}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.operation} onPress={() => setQtd(qtd + 1)}>
                                <Text style={styles.operationText}>+</Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: "center", marginLeft: 20 }}>
                                <Text style={{ marginBottom: 20, fontSize: 20, color: "#949494" }}>R$ {dataArray.preco * qtd}</Text>
                                <TouchableOpacity style={styles.containerCart}>
                                    <Icon name="shoppingcart" size={31} color={'#FF002E'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerImgTitle: {
        width: width,
        marginTop: 40,
        alignItems: "center"
    },
    containerContent: {
        marginBottom: 20,
        width: width - 10,
        alignSelf: "center",
        borderBottomEndRadius: 30,
        backgroundColor: "#1E1D1D",
        borderBottomStartRadius: 30,
    },
    containerIcon: {
        width: "100%",
        marginTop: 30,
        display: "flex",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    icon: {
        width: 30,
        height: 30,
    },
    containerQTD: {
        marginTop: 10,
        display: "flex",
        marginBottom: 10,
        textAlign: "center",
        alignItems: "flex-end",
        flexDirection: "row",
    },
    operation: {
        width: 50,
        height: 40,
        display: "flex",
        borderRadius: 7,
        textAlign: "center",
        justifyContent: 'center',
        backgroundColor: '#323232',
    },

    operationText: {
        color: "#FF002E",
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center"
    },
    containerCart: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#323232",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 7,
    }

})

export default Detail;