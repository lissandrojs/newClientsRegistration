import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Form from './components/Form';
import RootLayout from './layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: React.FC = () => {
  return (
    <RootLayout>
      <ToastContainer />
      <Container component="main" maxWidth="md">

        <CssBaseline /> 
        <Form />
      </Container>
    </RootLayout>
  );
};

export default Home;

