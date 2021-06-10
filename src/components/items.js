import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,Platform,TextInput,TouchableOpacity, FlatList } from 'react-native';
import {deleteTodo, updateTodos} from '../redux/actions/ActionsTasks';
import {useDispatch,useSelector} from 'react-redux'
const Items = (props)=>{

    const dispatch = useDispatch();
    const deleteTodos= (id)=>{
        dispatch(deleteTodo(id))
        
    }

    const updateTodo = (id,task)=>{
       console.log(id,task);
    }
      
    return ( 
        <View style={styles.item}>
          <View style={styles.itemLeft}>
              <View style={styles.square}></View>
              <Text style={styles.itemText}>{props.text}</Text>
          </View>
          
          <View style={styles.buttons}>
  
            <TouchableOpacity onPress={()=>updateTodo(props.id,props.text)}>
                <View style={styles.updated}>
                    <Text style={styles.textUpdated}>Update</Text>
                </View>
            </TouchableOpacity>
             
            <TouchableOpacity onPress={()=>deleteTodos(props.id)}>
                <View style={styles.trashed}>
                    <Text style={styles.textTrasehd}>Delete</Text>
                </View>
            </TouchableOpacity>
              
          </View>
          </View>
  )
}


export default Items

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    itemLeft:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center'
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center',
    },  
    trashed:{
        width:50,
        height:26,
        backgroundColor:'red',
        borderRadius:5,
        marginRight:5
    },
    textTrasehd:{
        textAlign:'center',
        paddingTop:2,
        color: '#FFF'
        
    },
    updated:{
        width:50,
        height:26,
        backgroundColor:'orange',
        borderRadius:5,
        marginRight:10
    },
    textUpdated:{
        textAlign:'center',
        paddingTop:2,
        color: '#FFF'
    },
    itemText:{
        maxWidth:'80%'
    },

})