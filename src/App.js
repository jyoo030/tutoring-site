import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import NavBar from './WithSubnavigation';
import { Outlet, Link } from "react-router-dom";
import Contact from './routes/contact'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100%">
          <NavBar />
          <Outlet />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
