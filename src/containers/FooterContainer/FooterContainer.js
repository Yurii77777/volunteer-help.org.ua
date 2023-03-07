import { Box, Typography } from '@mui/material/';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next';
import { DarkLogoComponent } from '../../components/UIcomponents/DarkLogoComponent/DarkLogoComponent';
import { EmblemComponent } from '../../components/UIcomponents/EmblemComponent/EmblemComponent';
import { LiqPayComponent } from '../../components/UIcomponents/LiqPayComponent/LiqPayComponent';
import links from '../../constants';
import { theme } from './FooterContainerTheme';

export const FooterContainer = () => {
  const { t } = useTranslation();
  return (
    <Box component="footer" sx={theme.footer}>
      <Box sx={theme.container}>
        <Box sx={theme.phones}>
          {links.map(({ id, tel, title }) => {
            return (
              <Link sx={theme.phone} href={`tel:${tel}`} title={t(`title.${title}`)} key={id}>
                {tel}
              </Link>
            );
          })}
        </Box>
        <Box sx={theme.email}>
          <Link href="mailto:child.help.book@gmail.com" class="footer__email-link">
            child.help.book@gmail.com
          </Link>
          <p>{t('footer.thanks')}</p>
          <Link
            href="https://www.liqpay.ua/ru/checkout/card/checkout_1656434197475475_5985714_TnEyx4vXfqPiY9Z0YXYP"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__liqpay-img-link">
            <LiqPayComponent />
          </Link>
        </Box>
        <Box sx={theme.logos}>
          <Box>
            <DarkLogoComponent />
          </Box>
          <Box>
            <EmblemComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
