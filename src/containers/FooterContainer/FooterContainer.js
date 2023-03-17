import { Box, Link } from '@mui/material/';
import { useTranslation } from 'react-i18next';
import { LogoComponent } from '../../components/UIcomponents/LogoComponent/LogoComponent';
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
          <Link href="mailto:child.help.book@gmail.com" sx={theme.emailLink}>
            child.help.book@gmail.com
          </Link>
          <p>{t('footer.thanks')}</p>
          <Link
            href="https://www.liqpay.ua/ru/checkout/card/checkout_1656434197475475_5985714_TnEyx4vXfqPiY9Z0YXYP"
            target="_blank"
            rel="noopener noreferrer">
            <LiqPayComponent />
          </Link>
        </Box>
        <Box sx={theme.logos}>
          <Box>
            <LogoComponent />
          </Box>
          <Box>
            <EmblemComponent />
          </Box>
        </Box>
      </Box>
      <Box sx={theme.copyright}>
        {t('footer.madein')}
        <Link href="http://yurets.info/" target="_blank" rel="noopener noreferrer">
          yurets.info
        </Link>
      </Box>
    </Box>
  );
};
