import authModel, { AuthModel } from './auth'
import tasksModel, { TasksModel } from './tasks'

export interface StoreModel {
  tasks: TasksModel
  auth: AuthModel
}

const storeModel: StoreModel = {
  tasks: tasksModel,
  auth: authModel,
}

export default storeModel
