import Name from './Items/Name'
import Login from './Items/Login'

export default function User(): JSX.Element {
  return (
    <div className="flex justify-between">
      <Name />
      <Login />
    </div>
  )
}
