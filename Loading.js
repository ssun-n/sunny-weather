import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Loading(){
    return(
        /* <StatusBar barStyle="dark-content" /> 화면 상태바 바꾸기, 갤럭시는 없는게 이뻐서 제외,, 사용하려면 import 해야함 */ 
        <View style={styles.container}>
            <Text style={styles.welcomeText}>써니, 오늘 날씨 알려줘 라고 말해봐!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "flex-end",
        paddingHorizontal : 50,
        paddingVertical : 110,
        backgroundColor : "lightblue"
    },
    welcomeText : {
        color : "black",
        fontSize : 20
    }
});
