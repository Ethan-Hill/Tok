import Title from './Items/Title'
import Date from './Items/Date'
import Description from './Items/Description'
import CompleteTask from './Items/CompleteTask'
import { Task } from '../../../interfaces'

type Props = {
  task: Task
}

const TaskItem: React.FC<Props> = ({ task }: Props) => {
  return (
    <div className="m-8 rounded-lg min-h-[200px] bg-LightNavy w-72 md:w-96 transform transition-all hover:scale-[1.1]">
      <div className="h-full p-6">
        <Title task={task} />
        <Date task={task} />
        <br />
        <Description task={task} />
        <CompleteTask id={task.id} />
      </div>
    </div>
  )
}

export default TaskItem
