/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { AppProps } from 'next/app'
import { StoreProvider } from 'easy-peasy'
import store from '../store'
import 'tailwindcss/tailwind.css'
import '@styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default App
