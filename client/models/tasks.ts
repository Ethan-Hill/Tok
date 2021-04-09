/* eslint-disable no-console */
import { Action, action, Thunk, thunk } from 'easy-peasy'
import { Task } from '../interfaces'
import axios from 'axios'

export interface TasksModel {
  tasks: Array<Task>
  removeTask: Action<TasksModel, Array<Task>>
  setInitialState: Action<TasksModel, Array<Task>>
  fetchInitialState: Thunk<TasksModel, Array<Task>>
  removeTaskRequest: Thunk<TasksModel, Record<any, any>>
}

const tasksModel: TasksModel = {
  tasks: [],
  removeTask: action((state, payload) => {
    state.tasks = payload
  }),

  setInitialState: action((state, payload) => {
    state.tasks = payload
  }),
  fetchInitialState: thunk(async (actions) => {
    const DBTasks: Array<Task> = await axios
      .get('http://localhost:3000/api/users')
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err)
      })

    actions.setInitialState(DBTasks)
  }),
  removeTaskRequest: thunk(async (actions, payload) => {
    const updatedArr = payload.state.tasks.tasks.filter((task) => {
      return task.id !== payload.id
    })
    console.log(updatedArr)

    const response: Array<Task> = await axios
      .patch('http://localhost:3000/api/users', {
        tasks: updatedArr,
      })
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err)
      })

    actions.removeTask(response)
  }),
}

export default tasksModel
