import { PlusCircle } from 'phosphor-react'
import styles from './Newtasks.module.css'
import { Tasks } from './Tasks'

export function Newtasks({ _tasks,_setTasks, _setTasksContent, _tasksContent }) {


  function handleTasksContent() {
    // receber o valor e colocar no _setTasksContent
    var input = document.querySelector(".inputContent");
    var texto = input.value;
    _setTasksContent(texto)
  }

  function handleSetTask() {
    _setTasks([..._tasks ,_tasksContent])
    _setTasksContent('')
    document.querySelector(".inputContent").value = ''
  }

  return(
    <div>
      <div className={styles.content} >
        <input
          className='inputContent'
          placeholder='Adicione uma tarefa aque.'
          onChange={handleTasksContent}
        />
        <button onClick={handleSetTask} >
          <span>Criar</span>
          <PlusCircle className={styles.icon} size={22} />
        </button>
      </div>
    </div>
  )
}