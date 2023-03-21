import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([])

  const createTask = (title, taskDesc) =>{
    const createdTasks = [
      ...tasks,{
        id: Math.round(Math.random()*999999),
        title: title,
        taskDesc,   // if key and value is equal name like above line, we can use it like this
      }
    ];
    setTasks(createdTasks);
  }

  const deleteTaskById = (id) =>{
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  }

  const editTaskById = (id, updatedTitle, updatedTaskDesc) =>{
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
