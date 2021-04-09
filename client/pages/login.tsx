/* eslint-disable no-console */
import Head from 'next/head'
import Header from '@components/Header/Header'
import React, { useState, useEffect } from 'react'
import { useStoreActions, useStoreState } from '../hook'
import { useRouter } from 'next/router'

export type LoginInputs = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const router = useRouter()
  const loginRequest = useStoreActions((actions) => actions.auth.loginRequest)
  const User = useStoreState((state) => state.auth.user)

  useEffect(() => {
    const handler = (User) => {
      if (User.email) {
        router.push('/tasks')
      } else {
        if (User.message) {
          console.log('Email or password is incorrect')
        }
      }
    }
    handler(User)
  }, [User])

  // these values are hardcoded since our main.go api only accepts this auth combo
  const initialValues: LoginInputs = {
    email: '',
    password: '',
  }

  const [inputs, setInputs] = useState(initialValues)

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    loginRequest(inputs)
  }

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.persist()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-DarkNavy">
        <Header />
        <div className="flex flex-col items-center justify-center w-full h-full mt-5">
          <h1 className="text-6xl font-bold text-white ">LOGIN</h1>
          <form onSubmit={handleSubmit} className="mt-32">
            <div className="mb-4">
              <label
                className="block mb-2 font-light text-white text-md"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-4 font-light leading-tight border border-gray-500 appearance-none bg-drabya-gray focus:outline-none focus:shadow-outline"
                type="text"
                name="email"
                id=""
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-light text-white text-md"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-4 font-light leading-tight border border-gray-500 appearance-none bg-drabya-gray focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center justify-between mb-5">
              <button
                className="px-6 py-2 font-light text-white bg-indigo-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                LOGIN
              </button>
              <a
                className="inline-block text-sm font-light text-indigo-600 align-baseline hover:text-indigo-500"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Login
