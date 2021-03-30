import { Task } from '../../../../interfaces'

type Props = {
  task: Task
}

export default function Description({ task }: Props): JSX.Element {
  return <h2 className="text-lg font-medium text-white">{task.description}</h2>
}
