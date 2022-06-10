import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/task'
import React, {useState} from 'react'; 

global.foo = 1;

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    console.log(task)   //Add Link here
    setTaskItems([...taskItems, task])
    setTask(null);

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      // headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        username: foo,
        password: [task],
      })
    };
    
    fetch("https://script.google.com/macros/s/AKfycbzxvgB3WAdt4wtxzGsjkGL-675OI1p_eu2qHw1iYMXWRtVjPzyfmPVaEXo7O5hMUPEO8w/exec", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      foo = foo + 1;

  }



  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}> Todays Task </Text>

        <View style = {styles.items}>
          {/* Here the task will come */}

          {
            taskItems.map((items, index) =>{
              return <Task key = {index} text = {items}/>
            })
          }

          {/* <Task text = {"Task1"}/>
          <Task text = {"Task2"}/> */}
        </View>
      </View>

      {/* Write an input */}
      <KeyboardAvoidingView 
      behavior = {Platform.OS === "ios" ? "padding" : "height"}
      style = {styles.writeTaskWrapper}>
      
      <TextInput style = {styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

      <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginTop: 30,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

