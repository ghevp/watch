import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>

    <ChakraProvider resetCSS>

      <App />

    </ChakraProvider>

  </React.StrictMode>

)