import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Provider} from 'react-redux'
import store from './src/redux/store';
import Task from './src/components/tasks';


 const  App = ()=> {
  return (
    <Provider store={store}> 
        <Task/>
    </Provider>
  );
}



export default App