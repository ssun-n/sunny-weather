import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const weatherOptions = {
    Haze : {
        iconName : "weather-hazy",
        gradient : ["#9a8478", "#1e130c"],
        title : "오늘 미세먼지 난리다",
        subtitle : "숨 안 쉴거 아니면 집에 있자!"
    },
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ["#2c3e50", "#fd746c"],
        title : "번개 안맞는 꿀팁 공개?!?",
        subtitle : "번개보다 빠르게 달려보자!"
    },
    Drizzle : {
        iconName : "weather-hail",
        gradient : ["#bdc3c7", "#2c3e50"],
        title : "ㅂiㄱr 오ㄴh...",
        subtitle : "오늘같은 날.. 나는 ㅅh침떼ㄱi.."
    },
    Rain : {
        iconName : "weather-pouring",
        gradient : ["#4ecdc4", "#556270"],
        title : "대박사건!! 비온다!!",
        subtitle : "오늘의 히든미션, 물웅덩이 3번 밟기"
    },
    Snow : {
        iconName : "weather-snowy",
        gradient : ["#e6dada", "#274046"],
        title : "두유 워너 빌더 스노우맨..?",
        subtitle : "ok......bye...."
    },
    Atmosphere : {
        iconName : "weather-cloudy-arrow-right",
        gradient : ["#007991", "#78ffd6"],
        title : "Today is Atmosphere",
        subtitle : "아니, atmosphere 무슨뜻인지 아는 아메리칸 있으면 알려주세요"
    },
    Clear : {
        iconName : "weather-sunny",
        gradient : ["#e1eec3", "#f05053"],
        title : "오늘!! 날씨!! 역대급!! 화-창!!",
        subtitle : "오늘같은 날이라도 외출하자 쫌!"
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ["#3fada8", "#808080"],
        title : "오늘 날씨 꿉꿉하네",
        subtitle : "그래..빨래는 내일로 미루자!"
    },
    Dust : {
        iconName : "weather-partly-cloudy",
        gradient : ["#ccccb2", "#757519"],
        title : "황사 미쳤다, 밖에 봤어?",
        subtitle : "숨은 내가 쉴게, 중국은 누가 처리할래?"
    },
    Fog : {
        iconName : "weather-fog",
        gradient : ["#b993d6", "#8ca6db"],
        title : "이날을 기다렸다",
        subtitle : "써니를 찾아서 in Fog.."
    },
    Mist : {
        iconName : "weather-rainy",
        gradient : ["#e4e5e6", "#00416a"],
        title : "비가 오긴 하는데..",
        subtitle : "솔직히 오늘은 우산 써도 소용없다.."
    },
    Smoke : {
        iconName : "weather-windy-variant",
        gradient : ["#616161", "#9bc5c3"],
        title : "아니, 중국 진짜 뭐하냐",
        subtitle : "오늘 마스크 꼭.. 아니 그냥 나가지마"
    },
    Sand : {
        iconName : "weather-sunny-alert",
        gradient : ["#1e130c", "#9a8478"],
        title : "오늘 날씨 너무 구려",
        subtitle : "아촤촤.. 오늘은 미세먼지가 있겠습니다^^"
    },
    Ash : {
        iconName : "weather-cloudy-alert",
        gradient : ["#606c88", "#3f4c6b"],
        title : "Today is Ash",
        subtitle : "몰라 오늘 날씨 Ash래.."
    },
    Squall : {
        iconName : "weather-partly-rainy",
        gradient : ["#9a8478", "#1e130c"],
        title : "Today is Squall",
        subtitle : "아니, Squall 대체 무슨 뜻입니까 휴먼.."
    },
    Tornado : {
        iconName : "weather-tornado",
        gradient : ["#485563", "#29323c"],
        title : "큰일났다!! 태풍왔어!!",
        subtitle : "창문에 테이프 붙였어?!?"
    }
};

export default function Weather({temp, condition}) {
    return (        

        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size= {96} 
                    name= {weatherOptions[condition].iconName}
                    color= "white"
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>

            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>

        </LinearGradient>
    
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Haze",
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Dust",
        "Fog",
        "Mist",
        "Smoke",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    /* 필요한 스타일시트 생성 (온도, 타이틀..) */
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    temp : {
        fontSize : 34,
        color : "white"
    },
    halfContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    title : {
        fontSize : 35,
        fontWeight : "300",
        marginBottom : 10,
        color : "white",

    },
    subtitle : {
        fontWeight : "600",
        fontSize : 20,
        color : "white"
    },
    textContainer : {
        paddingHorizontal : 20,
        alignItems : "flex-start"
    }
});