import Head from 'next/head'
import Header from '@components/Header/Header'
import Hero from '@components/Hero/Hero'
import Tasks from '@components/Tasks/Tasks'

import { Task } from '../interfaces'

type Props = {
  tasks: Task[]
}

export const Home = ({ tasks }: Props): JSX.Element => (
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

export default Home
