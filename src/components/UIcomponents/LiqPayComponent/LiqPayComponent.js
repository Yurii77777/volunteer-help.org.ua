import { Box, Link } from '@mui/material/';
import liqPayImg from '../../../assets/images/liqpay.webp';
import { theme } from './LiqPayComponentTheme';

export const LiqPayComponent = () => {
  return (
    <Link href="/" title="Go to the main page" sx={theme.imgLink}>
      <Box component="img" alt="Посилання для сплати он-лайн" src={liqPayImg} width="225px" loading="lazy" />
    </Link>
  );
};
