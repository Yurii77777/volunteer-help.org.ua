import { Box } from '@mui/material/';

import logo from '../../../assets/images/co-logo.svg';

import { theme } from './LogoComponentTheme';

export const LogoComponent = () => {
  return (
    <Box
      component="img"
      alt="Емблема ГО Допомога постраждалим дітям з України"
      src={logo}
      loading="lazy"
      sx={theme.logoImg}
    />
  );
};
