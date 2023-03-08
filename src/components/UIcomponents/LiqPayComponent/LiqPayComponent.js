import { Link } from 'react-router-dom';
import { Box } from '@mui/material/';

import liqPayImg from '../../../assets/images/liqpay.webp';

import { theme } from './LiqPayComponentTheme';

export const LiqPayComponent = () => {
  return (
    <Link to="/" title="Go to the main page" style={theme.imgLink}>
      <Box
        component="img"
        alt="Посилання для сплати он-лайн"
        src={liqPayImg}
        width="225px"
        loading="lazy"
      />
    </Link>
  );
};
