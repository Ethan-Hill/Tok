import Title from './Items/Title'
import AddPost from './Items/AddPost'

export default function Hero(): JSX.Element {
  return (
    <div className="flex items-center w-full h-32">
      <Title />
      <div className="relative flex right-10">
        <AddPost />
      </div>
    </div>
  )
}
