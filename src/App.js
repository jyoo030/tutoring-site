import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import NavBar from './WithSubnavigation';
import { Outlet, useLocation, Navigate} from "react-router-dom";

function App() {
  const isInitial = useLocation().pathname === "/"

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100%">
          <NavBar />
          {isInitial && <Navigate to="/home"/>}
          <Outlet />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
