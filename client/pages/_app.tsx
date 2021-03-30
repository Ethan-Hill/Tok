import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '@styles/global.css'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
