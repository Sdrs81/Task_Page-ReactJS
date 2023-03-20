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

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks = {tasks}/>
    </div>
  )
}

export default App
