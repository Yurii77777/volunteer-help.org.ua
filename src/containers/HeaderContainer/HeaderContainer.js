import { AppBar, Box } from '@mui/material/';

import { LogoComponent } from '../../components/UIcomponents/LogoComponent/LogoComponent';
import { EmblemComponent } from '../../components/UIcomponents/EmblemComponent/EmblemComponent';
import { GoodEvening } from '../../components/UIcomponents/GoodEvening/GoodEvening';
import { Languages } from '../../components/UIcomponents/Languages/Languages';

import { theme } from './HeaderContainerTheme';

export const HeaderContainer = () => {
  return (
    <AppBar sx={theme.haeder}>
      <LogoComponent />
      <EmblemComponent />

      <Box sx={theme.langContainer}>
        <GoodEvening />
        <Languages />
      </Box>
    </AppBar>
  );
};
