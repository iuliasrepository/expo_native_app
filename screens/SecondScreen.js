import React, {useEffect, useState} from 'react'
import { useIsFocused } from "@react-navigation/native"
import {Text, View, StyleSheet, SafeAreaView} from "react-native"

function SecondScreen () {
    const isActive = useIsFocused(),
        [intervalHandler, setIntervalHandler] = useState(0),
        [moment, setMoment] = useState(new Date()),
        time = {
            weekday: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][moment.getDay()],
            day: moment.getDate(),
            month: ['January','February','March','April','May','June','July','August','September','November','December'][moment.getMonth()],
            hours: moment.getHours() < 10 ? `0${moment.getHours()}`: moment.getHours() ,
            minutes: moment.getMinutes() < 10 ? `0${moment.getMinutes()}`: moment.getMinutes(),
            seconds: moment.getSeconds() < 10 ? `0${moment.getSeconds()}`: moment.getSeconds()
        }

        /*
        на Android отображается некорректно
        {
            dayOfWeek: moment.toLocaleString('eng', {
                weekday: 'long'
            }),
            date: moment.toLocaleString('eng', {
                day: 'numeric',
                month: 'long'
            }),
            time: moment.toLocaleTimeString()
        }*/

    const activityHandler = (isActive) => {
        if (isActive){
            setIntervalHandler(setInterval(()=>{
                setMoment(new Date())
            }, 1000))
        } else {
            clearInterval(intervalHandler)
        }
    }
    useEffect(()=> {
        activityHandler(isActive)
    },[isActive])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.clock}>
                <Text style={styles.dayOfWeek}>Today is {time.weekday}</Text>
                <Text style={styles.date}>{time.month} {time.day}</Text>
                <Text style={styles.time}>{time.hours}:{time.minutes}:{time.seconds}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clock: {
        width: '80%',
        alignItems: 'flex-start'
    },
    dayOfWeek: {
        fontSize: 20,
        color: '#8B5F3C'
    },
    date: {
        fontSize: 20,
        color: '#634517'
    },
    time: {
        fontSize: 40,
        color: '#634517',
        alignSelf: 'center'
    }
})

export default SecondScreen
