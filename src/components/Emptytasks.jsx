import { Placeholder } from 'phosphor-react';
import styles from './Emptytasks.module.css'

export function Emptytasks() {
  return(
    <div className={styles.content} >
      <Placeholder className={styles.icon} size={56} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}