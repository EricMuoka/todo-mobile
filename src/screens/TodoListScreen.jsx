import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TodoListScreen() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

   // to wipe data from asyncStorage if needed
  async function wipeAsyncStorage() {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage wiped successfully!');
    } catch (error) {
      console.error('Error wiping AsyncStorage:', error);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = () => {
    if (task.length > 0) {
      const newList = [...taskList, {task, completed: false }];
      setTaskList(newList);
      saveTasks(newList);
      setTask('');
    }
  };

  const handleCompleteTask = index => {
    const newList = [...taskList];
    newList[index].completed = true;
    setTaskList(newList);
    saveTasks(newList)
  };

  const handleDeleteTask = index => {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);
    saveTasks(newList);
  };

  const loadTasks = async () => {
      try {
        const saveTasks = await AsyncStorage.getItem('taskList');
        if (saveTasks !== null) {
          setTaskList(JSON.parse(saveTasks));
        }
      } catch (error) {
        console.log(error);
      }
  };

  const saveTasks = async (newList) => {
    try {
      await AsyncStorage.setItem('taskList', JSON.stringify(newList));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.taskListContainer}>
        {taskList.map(({task, completed}, index) => (
          <View key={index} style={completed ? styles.taskComplete : styles.taskIncomplete}>
            <Text style={styles.taskText}>{task}</Text>
            <View style={{flexDirection: 'row', padding: 10}}>
              <TouchableOpacity onPress={() => handleCompleteTask(index)}>
                <Text style={styles.completeButtonText}>Complete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF0000',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskListContainer: {
    flex: 1,
    width: '100%',
  },
  taskText: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 15,
    color: 'black',
  },
  completeButtonText: {
    color: '#FF0000',
  },
  deleteButtonText: {
    color: '#FF0000',
    paddingLeft: 20,
  },
  taskIncomplete: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gainsboro'

  },
  taskComplete: {
    backgroundColor: 'gainsboro',
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,

  }
});




