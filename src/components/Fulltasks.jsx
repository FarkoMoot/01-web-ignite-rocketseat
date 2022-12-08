import { Trash } from 'phosphor-react'
import styles from './Fulltasks.module.css'

export function Fulltasks({ content,__tasks,__setTasks,__setTasksCompleted,__tasksCompleted }) {

  function handleDelete() {
    var newTasks = __tasks
    //console.log(newTasks);// ate aque reu recebe o array inteiro
    
    var endNewTasks = []
    
    for( var i = 0; i < newTasks.length  ; i = i + 1 ) {
      if(newTasks[i] == content) {
        continue // alterar essa rotina
      } else {
        endNewTasks.push(newTasks[i])
      }
    }

    //console.log(endNewTasks)

    __setTasks(endNewTasks) 
  }

  function handleTestaRadio() {
    if(__tasksCompleted === true) {
      __setTasksCompleted(false)
      return
    }
    __setTasksCompleted(true)
  }

  return (
    <div className={styles.content} >
      <input type="radio" onClick={handleTestaRadio}/>
      { __tasksCompleted ?<p>{content}==</p> :<p>{content}</p> }
      
      <button onClick={handleDelete}  className={styles.iconBox} >
        <Trash className={styles.icon} />
      </button>
    </div>
  )
}