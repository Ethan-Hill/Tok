import { GetStaticProps } from 'next'
import TaskItem from './Items/TaskItem'
import { Task } from '../../interfaces'
import { sampleTaskData } from '../../utils/sample-data'

type Props = {
  tasks?: Array<Task>
}

const Tasks = ({ tasks }: Props) => {
  console.log(tasks)
  if (!tasks) {
    return null
  }

  return (
    <section className="flex flex-wrap justify-around w-full">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tasks: Array<Task> = sampleTaskData
  return { props: { tasks } }
}

export default Tasks
