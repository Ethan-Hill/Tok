/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next'
import { Task, User } from '../../interfaces'
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const DBTasks: Array<Task> = await axios
      .get('http://localhost:4000/users')
      .then((res) => {
        return res.data[0].tasks
      })
      .catch((err) => {
        console.log(err)
      })
    res.send(DBTasks)
  }
  if (req.method === 'PATCH') {
    const { tasks } = req.body

    const Response: Array<Task> = await axios
      .patch(
        `http://localhost:4000/users/d1a0e6ed-f9e6-4c86-aa17-e4b0120252b5`,
        {
          tasks,
        }
      )
      .then((res) => {
        if (!res.data) {
          return { message: 'ID incorrect' }
        }
        return res.data.tasks
      })
      .catch((err) => {
        console.log(err)
      })
    res.send(Response)
  }
  if (req.method === 'POST') {
    const { email, password } = req.body

    const Response: Promise<User> = await axios
      .post(`http://localhost:4000/users/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data.message) {
          return { message: res.data.message }
        }
        return res.data
      })
      .catch((err) => {
        console.log(err)
      })
    res.send(Response)
  }
}
