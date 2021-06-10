import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,Platform,TextInput,TouchableOpacity, FlatList, Alert } from 'react-native';
import {getTodos,addTodo,updateTodos} from '../redux/actions/ActionsTasks'
import {useDispatch,useSelector,connect} from 'react-redux'
import Items from '../components/items'


const Task = ()=> {
    
  
    const todos = useSelector(state => state.tasks.todos);
    const deletetodo = useSelector(state => state.tasks.deletetodo);
    const addtodo = useSelector(state => state.tasks.addtodo)
    const updatetodos = useSelector(state=> state.tasks.updatetodos);
    const [auxupda, setAuxupda] = useState({}) 
    const dispatch = useDispatch();
    const [tasks,setTasks] = useState([])
    const [newtext,SetnewText] = useState("")
    
   
    useEffect(() => {
      if(todos.length == 0 ){
        dispatch(getTodos());
        console.log('entre');
       
      }
      


      if(todos.length > 0 && addtodo == null && updatetodos.length == 0 && deletetodo == null){
        setTasks([...tasks,...todos])
        
      }

      if(addtodo != null ){
        
        if(addtodo.StatusCode == 200 ){
          console.log(tasks);
            setTasks([...tasks,addtodo.newTask])
            
        }
        
      }

      if(deletetodo != null){
        if(deletetodo.StatusCode == 200){
          
          let newTodos = tasks.filter(item=> item.id != deletetodo.id);
          setTasks([...newTodos])
       }
      }

      
      if(updatetodos.length > 0){
                if(updatetodos[0].StatusCode == 200){
          let upda = tasks.find(item=> item.id != updatetodos[0].updaTaks.id);
          upda.push(updatetodos[0].updaTaks);
          setTasks([...tasks,...upda])
        }
      }

      
    
    }, [todos,deletetodo,addtodo,updateTodo])
   


    const handlertodo = (a) =>{
      dispatch(addTodo(a))
    }


    const updateTodo = ()=>{
      console.log(auxupda);
     // dispatch(updateTodos(auxupda.id,auxupda.task))
  }
    
   
        let newtask = <Text>No Tasks</Text>
        
        if(tasks.length > 0){
          newtask = tasks.map((item,index)=>{
                return <Items setAuxupda={setAuxupda} key={index} id={item.id} text={item.task} />
            })
        }
        

        
        
        
      
        
        if(auxupda){
            input = <>
              <TextInput style={styles.input} value={auxupda.task} placeholder={""} ></TextInput>
              <TouchableOpacity style={styles.addWrapper} onPress={()=> updateTodo()}>
                  <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </>
        }else{
        input= <>
            <TextInput style={styles.input} placeholder={"write a task"} onChangeText={text=>SetnewText(text)}></TextInput>
              <TouchableOpacity style={styles.addWrapper} onPress={()=> handlertodo(newtext)}>
                  <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
          </>
        }
        return(
            
            <View style={styles.container}>
            
            <View style={styles.taskWrapper}>
              <Text style={styles.sectionTitle}>Today's Task</Text>

              <View style={styles.items}>
                  {newtask}
              </View>
            </View>

            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.writeTaskwrapper}>
                {input}          
            </KeyboardAvoidingView>
          </View>
        )

   
    
    
    
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
      },
      taskWrapper:{
        padding:80,
        paddingHorizontal:20
      },
      sectionTitle:{
        fontSize:24,
        fontWeight:"bold"
      },
      items:{
        marginTop:30
      },
      writeTaskwrapper:{
        position:'absolute',
        bottom:60,
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'
      },
      input:{
        paddingVertical:15,
        paddingHorizontal:15,
        backgroundColor:'#FFF',
        borderRadius:60,
        borderColor:'#C0C0C0',
        borderWidth:1,
        width:250,
      },
      addWrapper:{
        width:60,
        height:60,
        backgroundColor:'#FFF',
        borderRadius:60,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#C0C0C0',
        borderWidth:1,
      },
      addText:{
        fontSize:30
      },

 

})





export default Task

