import { useContext } from "react";
import { Context } from "../../context/provider";
const { View, ScrollView, Text, Image, Dimensions, StyleSheet } = require("react-native")

const { width } = Dimensions.get("window")

const Detail = () => {

    const { dataArray } = useContext(Context)

    return (
        <ScrollView style={{ backgroundColor: '#282828' }}>
            <View style={styles.container}>
                <Text style={{
                    fontSize: dataArray.categoria == 'refeição' || 'salada' ? 75 : 100,
                    textTransform: 'uppercase',
                    color: '#939393',
                    fontWeight: '900',
                    letterSpacing: 2,
                }}>{dataArray?.categoria}</Text>
                <Image style={{
                    width: width ,
                    height: 400,
                }} source={dataArray?.img} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        alignItems: "center"
    }
})

export default Detail;