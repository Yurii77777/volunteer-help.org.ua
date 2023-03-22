import { Box, Link } from '@mui/material/';
import liqPayImg from '../../../assets/images/liqpay.webp';

export const LiqPayComponent = () => {
  return (
    <Link href="/" title="Go to the main page">
      <Box component="img" alt="Посилання для сплати он-лайн" src={liqPayImg} width="225px" loading="lazy" />
    </Link>
  );
};
