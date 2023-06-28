import PostState from '@/context/PostState'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider>
  <PostState>
  <Component {...pageProps} />
  </PostState>
  </ChakraProvider>
  )
}
