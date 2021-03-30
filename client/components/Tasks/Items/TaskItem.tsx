import Title from './Items/Title'
import Date from './Items/Date'
import Description from './Items/Description'
import { Task } from '../../../interfaces'

type Props = {
  task: Task
}

export default function TaskItem({ task }: Props): JSX.Element {
  return (
    <div>
      <Title task={task} />
      <Date task={task} />
      <Description task={task} />
    </div>
  )
}
