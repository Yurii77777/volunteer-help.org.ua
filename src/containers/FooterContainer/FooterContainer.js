import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Link, Typography } from '@mui/material/';
import { Phone } from '@mui/icons-material';

import { CompanyNameComponent } from '../../components/UIcomponents/CompanyNameComponent/CompanyNameComponent';
import { LogoComponent } from '../../components/UIcomponents/LogoComponent/LogoComponent';
import { LiqPayComponent } from '../../components/UIcomponents/LiqPayComponent/LiqPayComponent';
import { contacts } from '../../constants/constants';
import { theme } from './FooterContainerTheme';

export const FooterContainer = () => {
  const { t } = useTranslation();
  return (
    <Box component="footer" sx={theme.footer}>
      <Container>
        <Grid container sx={theme.container}>
          <Grid item container sx={theme.footerBox}>
            {contacts.map(({ id, tel, title }) => {
              return (
                <Link sx={theme.phone} href={`tel:${tel}`} title={t(`title.${title}`)} key={id}>
                  <Phone />
                  {tel}
                </Link>
              );
            })}
          </Grid>

          <Grid item container sx={theme.footerBox}>
            <Typography variant="subtitle1">
              <Box>
                <Link href="mailto:child.help.book@gmail.com" sx={theme.emailLink}>
                  child.help.book@gmail.com
                </Link>
              </Box>
              <Box>{t('footer.thanks')}</Box>
            </Typography>
            <LiqPayComponent />
          </Grid>

          <Grid item container sx={theme.footerBox}>
            <Grid item>
              <CompanyNameComponent />
            </Grid>
            <Grid item>
              <LogoComponent />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Box sx={theme.copyright}>
        {t('footer.madein')}
        {/* <Link href="http://yurets.info/" target="_blank" rel="noopener noreferrer">
          yurets.info
        </Link> */}
      </Box>
    </Box>
  );
};
