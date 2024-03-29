import React, {Component} from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform} from 'react-native'
import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class TaskList extends Component{
   state={
    showDoneTasks: true,
    tasks:[
    {id: Math.random(),
    desc:'Comprar um livro',
    estimateAt:new Date(),
    doneAt: new Date(),
    },
    {
    id: Math.random(),
    desc: 'Ler o livro',
    estimateAt: new Date(),
    doneAt: null,
    },
    ]
   }

   toggleFilter = () =>{
    this.setState({ showDoneTasks: !this.state.showDoneTasks });
   }

   toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task =>{
            if(task.id === taskId){
                task.doneAt=task.doneAt?null:new Date()
            }
        })
        this.setState({tasks:tasks})
   }

    render(){
        const today=moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (<View style={styles.container}>
        <ImageBackground style={styles.background} source={todayImage}>
            <View style={styles.iconBar}>
                <TouchableOpacity onPress={this.toggleFilter}>
                    <Icon name={this.state.showDoneTasks?'eye':'eye-slash'} size={20} color={commonStyles.colors.secondary} />
                </TouchableOpacity>
            </View>
            <View style={styles.titleBar}>
                <Text style={styles.title}>Hoje</Text>
                <Text style={styles.subtitle}>{today}</Text>
            </View>
        </ImageBackground>
        <View style={styles.tasklist}>

<FlatList
 data={this.state.tasks}
 keyExtractor={item => `${item.id}`}
 renderItem={({item})=> <Task {...item} toggleTask={this.toggleTask} />}
 />

        </View>
        </View>)
    }
}
/*
<Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()} ></Task>
<Task desc="Ler este Livro" estimateAt={new Date()} doneAt={new Date()} ></Task>
<Task desc="Comprar outro Livro" estimateAt={new Date()}  ></Task>
*/

const styles = StyleSheet.create(
{
    container:{
    flex:1
    },
    background:{
    flex:3
    },
    tasklist:{
    flex:7
    },
    titleBar:{
       flex:1,
       justifyContent:'flex-end',
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar :{
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios'? 40:10,
    }
});