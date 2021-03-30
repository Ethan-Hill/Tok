import { Task } from '../../../../interfaces'

type Props = {
  task: Task
}

export default function Date({ task }: Props): JSX.Element {
  return <h2 className="text-2xl font-semibold text-white">{task.date}</h2>
}
