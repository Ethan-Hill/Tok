import { Task } from '../../../../interfaces'

type Props = {
  task: Task
}

export default function Title({ task }: Props): JSX.Element {
  return <h1 className="text-4xl font-bold text-white">{task.title}</h1>
}
