import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
const theme = extendTheme({
    config,
  fonts: {
    heading: `'Plus Jakarta Sans Variable', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
})

export default theme