import { Link } from 'react-router-dom';
import { Box } from '@mui/material/';

import darkLogo from '../../../assets/images/logo-ua-dark.webp';

import { theme } from './DarkLogoComponentTheme';

export const DarkLogoComponent = () => {
  return (
    <Link to="/" title="Go to the main page" style={theme.logoLink}>
      <Box
        component="img"
        alt="Логотип ГО Допомога постраждалим дітям з України"
        src={darkLogo}        
        loading="lazy"
      />
    </Link>
  );
};
