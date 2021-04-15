import React, {useState} from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Button,
    TextInput,
    LayoutAnimation,
    TouchableOpacity, TouchableWithoutFeedback
} from "react-native"
import NoteItem from "../components/NoteItem"
import Navbar from "../components/Navbar"



function FirstScreen () {



    const
        [input, setInput] = useState(''),
        [notes, setNotes] = useState([
            /*{
                'id': '1',
                'body' : 'test text',
                'animated' : 'false'
            }*/
            ]),
        [hintVisibility, setHintVisibility] = useState(false),
        setAnimation = () => {
            LayoutAnimation.configureNext({
                duration: 500,
                create: {
                    type: LayoutAnimation.Types.easeIn,
                    property: LayoutAnimation.Properties.scaleXY,
                    springDamping: 0.7,
                },
            });
        },
        addNote = () => {
            setAnimation()
            setNotes(prev => [{
                'id': Date.now().toString(),
                'body': input,
                'animated': true
            }, ...prev])

            setInput('')
        }

    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <TouchableOpacity
                style={styles.content}
                onPress={()=>setHintVisibility(prev => !prev)}
                activeOpacity = {1.0}
            >
                <View style={styles.inputBlock}>
                    <TextInput
                        style={styles.input}
                        placeholder="Введите текст записи"
                        onChangeText={setInput}
                        value={input}
                        multiline = {true}
                        textAlignVertical = 'top'
                    />
                    <Button
                        color='#8B5F3C'
                        onPress={()=>addNote()}
                        title="Add"
                    />
                </View>
                <FlatList
                    style={styles.list}
                    data={notes}
                    keyExtractor={(item) => item.id}
                    renderItem={NoteItem}
                    ListEmptyComponent={<Text>Нет заметок</Text>}
                />
                <View style={[styles.bottomHint, {opacity: hintVisibility ? 1 : 0}]}>
                    <Text style={styles.hintText}>Swipe to clock...</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        color: 'black'
    },
    content: {
        flex: 1,
        width: '90%'
    },
    inputBlock: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#8B5F3C'
    },
    bottomHint: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    hintText: {
        color: 'rgba(139,95,60,0.5)',
        fontWeight: 'bold'
    }
})

export default FirstScreen
