import Head from 'next/head'
import Header from '@components/Header/Header'
import Hero from '@components/Hero/Hero'
import Tasks from '@components/Tasks/Tasks'
import { useStoreState, useStoreActions } from '../hook'
import { Task } from '../interfaces'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

type Props = {
  DBTasks: Array<Task>
}

const Home: React.FC<Props> = () => {
  const router = useRouter()
  const tasks = useStoreState((state) => state.tasks.tasks)
  const User = useStoreState((state) => state.auth.user)

  useEffect(() => {
    if (!User.email) {
      router.push('/login')
    }
  }, [User])

  const fetchInitialState = useStoreActions(
    (actions) => actions.tasks.fetchInitialState
  )

  useEffect(() => {
    fetchInitialState(null) // 👈 dispatch
  }, [tasks])

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-DarkNavy">
        <Header />
        <div>
          <Hero />
          <Tasks tasks={tasks} />
        </div>
      </main>
    </>
  )
}

export default Home
