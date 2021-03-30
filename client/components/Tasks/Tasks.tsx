import { GetStaticProps } from 'next'
import TaskItem from './Items/TaskItem'
import { Task } from '../../interfaces'
import { sampleTaskData } from 'utils/sample-data'
import { useEffect } from 'react'

type Props = {
  tasks: Task[]
}

const Tasks: JSX.Element<Props> = ({ tasks }) => {
  useEffect(() => {
    console.log(tasks)
  }, [])
  return (
    <section className="flex flex-wrap justify-around w-full">
      {/* {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))} */}
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tasks: Task[] = sampleTaskData
  return { props: { tasks } }
}

export default Tasks
