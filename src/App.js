import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([

  {
    path:'/',element:<Home/>
  },

]);
function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;