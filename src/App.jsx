import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Newtasks } from './components/Newtasks'
import { Tasks } from './components/Tasks'

import './global.css'
import styles from './App.module.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [tasksContent, setTasksContent] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState(false)
  const [tasksDeleted, setTasksDeleted] = useState(false)

  return (
    <div>
      <Header />
      <div className={styles.app}>
        <div className={styles.content} >
          <Newtasks
            _tasks={tasks}
            _setTasks={setTasks}
            _tasksContent={tasksContent}
            _setTasksContent={setTasksContent}
          />
          <Tasks
            _tasks={tasks}
            _setTasks={setTasks}
            _tasksContent={tasksContent}
            _tasksCompleted={tasksCompleted}
            _setTasksCompleted={setTasksCompleted}
          />
        </div>
      </div>
    </div>
  )
}

export default App
