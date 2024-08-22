import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import ErrorBoundary from './components/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </ErrorBoundary>
  </StrictMode>,
)


export const server = `https://api.coingecko.com/api/v3`;
