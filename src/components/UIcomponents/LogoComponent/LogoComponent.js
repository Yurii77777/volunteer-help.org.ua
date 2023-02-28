import { Link } from 'react-router-dom';
import { Box } from '@mui/material/';

import logo from '../../../assets/images/logo-ua.webp';

import { theme } from './LogoComponentTheme';

export const LogoComponent = () => {
  return (
    <Link to="/" title="Go to the main page" style={theme.logoLink}>
      <Box
        component="img"
        alt="Логотип ГО Допомога постраждалим дітям з України"
        src={logo}
        width="225px"
        loading="lazy"
      />
    </Link>
  );
};
