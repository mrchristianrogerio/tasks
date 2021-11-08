import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../commonStyles'
import moment from 'moment'
import 'moment/locale/pt-br'
export default props=> {
    const date = moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM')
    const doneOrNotStyle = props.doneAt != null? {textDecorationLine: 'line-through'}:{};

    return (
        <View style={styles.container}>

            <TouchableWithoutFeedback onPress={()=>props.toggleTask(props.id)}>
                <View style={styles.checkContainer}>
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>

            <View>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    )
}

function getCheckView(doneAt){
    if(doneAt){
         return <View style={styles.done}><Text><Icon name="check" size={20} color='#FFF'></Icon></Text></View>
    }else{
        return <View style={styles.pending}><Text></Text></View>
    }
}

const styles= StyleSheet.create({
    container:{
    flexDirection:'row',
    borderColor:'#AAA',
    borderBottomWidth:1,
    alignItems:'center',
    paddingVertical:10,
    },
    checkContainer:{
              width:'20%',
              alignItems:'center',
              justifyContent:'center'
    },
    pending:{
        height: 25, width: 25, borderRadius:14,
        borderWidth:1, borderColor: '#555'
    },
    done:{
        height: 25, width: 25, borderRadius:14,
        borderWidth:1, backgroundColor: '#4D7031',
        alignItems:'center', justifyContent:'center'
    },
    desc:{
    fontFamily: commonStyles.fontFamily,
    color:commonStyles.mainText,
    fontSize:15
    },
    date:{
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    }
})