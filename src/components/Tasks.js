import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    
  return (
    // Use setTasks([...tasks, {}]) to update the map, because cannot push! state is immutable
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task}
        onDelete={onDelete} onToggle={onToggle} />
        ))}
    </>
  )
}

export default Tasks
