import { Route, Routes } from 'react-router-dom';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material/';

import { HeaderContainer } from '../../containers/HeaderContainer/HeaderContainer';
import { FooterContainer } from '../../containers/FooterContainer/FooterContainer';
import { MainPage } from '../../pages/MainPage/MainPage';
import { PhotosActivities } from '../../pages/photosActivities/photosActivities';
import { theme } from './AppTheme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <HeaderContainer />

        <Box component="main">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
           <Route path="/photos/:itemId" element={<PhotosActivities />}></Route>
           
          </Routes>
        </Box>

        <FooterContainer />
      </Container>
    </ThemeProvider>
  );
};
