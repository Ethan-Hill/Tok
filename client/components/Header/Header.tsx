import Nav from './Items/Nav/Nav'
import Brand from './Items/Brand/Brand'

export const Header = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between w-full h-32 border-b-2 border-BorderBlue">
      <Brand />
      <Nav />
    </header>
  )
}

export default Header
