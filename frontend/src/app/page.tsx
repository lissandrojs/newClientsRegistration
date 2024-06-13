// import React from 'react';
// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// import Form from './components/Form';

// export default function Home() {

//   <Container component="main" maxWidth="md">
//     <CssBaseline />
//     <Form />
//   </Container>
// }

import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Form from './components/Form';
import RootLayout from './layout';

const Home: React.FC = () => {
  return (
    <RootLayout>
      <Container component="main" maxWidth="md">
        <CssBaseline /> 
        <Form />
      </Container>
    </RootLayout>
  );
};

export default Home;

