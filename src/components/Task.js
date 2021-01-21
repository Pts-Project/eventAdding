import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
      <p>{task.ema}</p>
       {task.reminder ? <p>Admin</p>: ''}
       <p>{task.ski}</p>
       <p>{task.pas}</p>
       <p>{task.con}</p>
      
    </div>
  )
}

export default Task
