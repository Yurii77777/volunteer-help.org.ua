import { AppBar, Box, Container, Toolbar } from '@mui/material/';

import { CompanyNameComponent } from '../../components/UIcomponents/CompanyNameComponent/CompanyNameComponent';
import { LogoComponent } from '../../components/UIcomponents/LogoComponent/LogoComponent';
import { Languages } from '../../components/UIcomponents/Languages/Languages';

import { theme } from './HeaderContainerTheme';

export const HeaderContainer = () => {
  return (
    <AppBar sx={theme.header}>
      <Container>
        <Toolbar disableGutters>
          <Box sx={theme.companyName}>
            <LogoComponent />
            <CompanyNameComponent invertColor={true} />
          </Box>
          <Box sx={theme.langContainer}>
            <Languages />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
