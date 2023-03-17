import { AppBar, Box } from '@mui/material/';

import { LogoComponent } from '../../components/UIcomponents/LogoComponent/LogoComponent';
import { EmblemComponent } from '../../components/UIcomponents/EmblemComponent/EmblemComponent';
import { Languages } from '../../components/UIcomponents/Languages/Languages';

import { theme } from './HeaderContainerTheme';

export const HeaderContainer = () => {
  return (
    <AppBar sx={theme.header}>
      <Box sx={theme.logo}>
        <EmblemComponent />
        <LogoComponent invertColor={true} />
      </Box>
      <Box sx={theme.langContainer}>
        <Languages />
      </Box>
    </AppBar>
  );
};
