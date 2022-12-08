import { Emptytasks } from './Emptytasks'
import { Fulltasks } from './Fulltasks'
import styles from './Tasks.module.css'

export function Tasks({ _tasks,_setTasks, _tasksContent,_tasksCompleted, _setTasksCompleted }) {


  return(
    <div className={styles.content} >
      <div className={styles.header}>
        <div className={styles.sides}>
          <p className={styles.fontleft} >
            Tarefas Criadas
          </p>
          <div>
            <span>{_tasks.length}</span>
          </div>
        </div>
        <div className={styles.sides}>
          <p className={styles.fontright} >
            Concluidas
          </p>
          <div className={styles.boxConcluido}>
            <p><span>0</span> de <span>{_tasks.length}</span></p>
          </div>
        </div>
      </div>
      <div className={styles.main} >
        {//_tasks.length === 0 ? <Emptytasks /> : <Fulltasks />
          
          _tasks.map( (item) => {
            //console.log(item) value of array
            if ( _tasks.length > 0 ) {
              return <Fulltasks
                content={item}
                __setTasksCompleted={_setTasksCompleted}
                __tasksCompleted={_tasksCompleted}
                
                __tasks={_tasks}

                __setTasks={_setTasks}
              />
            } else if ( _tasks.length === 0 ) {
              return <Emptytasks />
            }
          })
        }
        
      </div>
    </div>
  )
}

/*

if( _tasks.length === 0 ) {
  return <Emptytasks />
} else {
  _tasks.map( (item) => {
    if ( _tasks.length > 0 ) {
      return <Fulltasks
      content={item}
      __setTasksCompleted={_setTasksCompleted}
      __tasksCompleted={_tasksCompleted}
      
      __tasks={_tasks}
      
      />
    } 
  })
}


*/