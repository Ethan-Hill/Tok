/* eslint-disable no-console */
// import { Task } from '../../../../interfaces'
import { useStoreActions, useStoreState } from '../../../../hook' // 👈 import typed hook

type Props = {
  id: number
}

export default function CompleteTask({ id }: Props): JSX.Element {
  const removeTask = useStoreActions(
    (actions) => actions.tasks.removeTaskRequest
  )
  const state = useStoreState((state) => state)

  return (
    <div className="flex items-end justify-end w-full mt-6 focus:outline-none">
      <button
        onClick={() => {
          removeTask({ state, id })
        }}
        className="p-2 transition-all rounded-lg bg-Navy hover:shadow-xl hover:bg-green-400"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.8388 6.69459L8.81799 18.7154L3.16113 13.0586L4.57113 11.6486L8.81799 15.8854L19.4288 5.28459L20.8388 6.69459Z"
            fill="#FFF"
          ></path>
        </svg>
      </button>
    </div>
  )
}
