import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [tasks, setTasks] = useState([])

  const createTask = async (title, taskDesc) =>{

    const response = await axios.post('http://localhost:3000/tasks', {
      title: title,
      taskDesc // if key and value is equal name like above line, we can use it like this
    });

    const createdTasks = [
      ...tasks,
      response.data
    ];
    setTasks(createdTasks);
  }

  const fetchTasks = async () =>{
    const response = await axios.get('http://localhost:3000/tasks');
    setTasks(response.data);
  } 

  useEffect(() => {
    fetchTasks();
  }, []);   // just works when project restarted

  const deleteTaskById = async (id) =>{
    await axios.delete(`http://localhost:3000/tasks/${id}`);  // if we pass data to url, we need this `` instead of ''
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  }

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) =>{
    await axios.put(`http://localhost:3000/tasks/${id}` ,{
      title: updatedTitle,
      taskDesc: updatedTaskDesc
    }); 
    const afterUpdatingTasks = tasks.map((task) => {
      if(task.id === id){
      return { id, title: updatedTitle, taskDesc: updatedTaskDesc}
      }
      
      return task;
      
    })
    setTasks(afterUpdatingTasks);
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks = {tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
