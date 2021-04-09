/* eslint-disable no-console */
import { Action, action, Thunk, thunk } from 'easy-peasy'
import axios from 'axios'
import { User, Error } from '../interfaces'

export interface AuthModel {
  user: Record<any, any>
  userSet: Action<AuthModel, Promise<User | Error>>
  loginRequest: Thunk<AuthModel, Record<any, any>>
  setInitialUserState: Action<AuthModel, Promise<User | Error>>
}

const authModel: AuthModel = {
  user: {},

  userSet: action((state, payload) => {
    state.user = payload
  }),
  setInitialUserState: action((state) => {
    state.user
  }),
  loginRequest: thunk(async (actions, payload) => {
    const { email, password } = payload

    const response: Promise<User> = await axios
      .post('http://localhost:3000/api/users', {
        email,
        password,
      })
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(response)

    actions.userSet(response)
  }),
}

export default authModel
