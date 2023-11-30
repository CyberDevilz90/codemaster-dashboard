import '@fontsource/montserrat';
import '@fontsource/plus-jakarta-sans';
import "./App.css";

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './routes/AppRoutes';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
};

export default App;
