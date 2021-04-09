import TaskItem from './Items/TaskItem'
import { Task } from '../../interfaces'

type Props = {
  tasks?: Array<Task>
}

const Tasks: React.FC<Props> = ({ tasks }: Props) => {
  if (!tasks) {
    return null
  }

  return (
    <section className="flex flex-wrap justify-center w-full">
      <ul className="flex flex-wrap justify-start w-full">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tasks
