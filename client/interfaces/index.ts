export type Task = {
  id: number
  title: string
  description: string
  date: string
}

export type User = {
  tasks: Array<Task>
  userId: string
  email: string
  username: string
  _id: string
}

export type Error = {
  message: string
}

// The interface representing our Todos model
export interface TodosModel {
  tasks: Array<Task>
  User: Record<any, any>
  Error: Record<any, any>
}

// The interface representing our entire store model
export interface StoreModel {
  tasks: TodosModel
}
