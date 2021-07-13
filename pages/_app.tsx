import '../styles/globals.css'
import type { AppProps } from 'next/app'

{/*/ @ts-ignore */}
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
