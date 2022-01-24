import React from 'react';
import {StyleSheet, View, Button, FlatList, Image} from 'react-native';
import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';
import DisplayImage from './components/DisplayImage';
import Header from './components/Header';

export default function App(){
  const[tasks, setTasks]= React.useState([]);
  const[addTasks, setAddTasks]=useState(false);
  
  const handleAddTask = taskTitle => {
    setTasks(currentTasks => [...currentTasks, {id:Math.random().toString(), value: taskTitle}]);
    setAddTasks(false);
  }

  const HandleDeleteTask = taskId => {
    setTasks(currentTasks =>{
      return currentTasks.filter(task => task.id !== taskId);
    })
  }
}