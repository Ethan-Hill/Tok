import Head from 'next/head'
import Header from '@components/Header/Header'

const Tasks: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-DarkNavy">
        <Header />
        <div className="flex justify-center w-full mt-5">
          <h1 className="font-bold text-white text-9xl ">Welcome to Tok</h1>
        </div>
      </main>
    </>
  )
}

export default Tasks
