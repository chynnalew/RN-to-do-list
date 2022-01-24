import React from 'react';
import {StyleSheet, View, Button, FlatList, Image} from 'react-native';
import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';
import DisplayImage from './components/DisplayImage';
import Header from './components/Header';

export default function App(){
  const[tasks, setTasks]= React.useState([]);
  const[addTasks, setAddTasks]= React.useState(false);
  
  const handleAddTask = taskTitle => {
    setTasks(currentTasks => [...currentTasks, {id:Math.random().toString(), value: taskTitle}]);
    setAddTasks(false);
  }

  const handleDeleteTask = taskId => {
    setTasks(currentTasks =>{
      return currentTasks.filter(task => task.id !== taskId);
    })
  }

  const handleCancelAddTask = () => {
    setAddTasks(false);
  }

  return(
    <View>
      <Header title="To-Do-App"></Header>
      <View style={styles.screen}>
        <Button title="Add New Task" onPress={()=> setAddTasks(true)}></Button>
        <ToDoInput visible={addTasks} onAddTask={handleAddTask} onCancel={handleCancelAddTask}/>
        <DisplayImage taskStatus={tasks}/>
        <View style={styles.screenList}>
          <FlatList 
            keyExtractor={(item, index) => item.id} 
            data={tasks} 
            renderItem={itemData=>( 
              <ToDoItem
                title={itemData.item.value}
                onDelete={deleteTaskHandler}
                id={itemData.item.id}/>
              )}
            ></FlatList>
        </View>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  screen:{
    paddingTop:70,
    paddingHorizontal:70
  },
  screenlist:{
    marginLeft:20,
    marginRight:20
  }
})