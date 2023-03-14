import { useTranslation } from 'react-i18next';
import { Button, Box, CardActions, Card, CardContent, Container, Typography } from '@mui/material';
import { actionList } from '../../../constants/constants';
import theme from './TopBannerHelpsTheme';

const TopBannerHelps = () => {
  const { t } = useTranslation();
  return (
    <Box sx={theme.wrapper}>
      <Container sx={theme.info}>
        {actionList.map(({ id, title, description, formRef, category }) => {
          return (
            <Card key={id} sx={theme.card}>
              <CardContent sx={theme.content}>
                <Typography variant="h5" sx={theme.title}>
                  {t(`helps.${category}.${title}`)}
                </Typography>
                <Typography variant="subtitle1" sx={theme.subtitle}>
                  {t(`helps.${category}.${description}`)}
                </Typography>
              </CardContent>

              <CardActions sx={theme.actions}>
                <Button
                  variant="contained"
                  sx={theme.actionButton}
                  href="mailto:helping.children.ua@gmail.com"
                  title={t('title.email')}>
                  {t('helps.buttons.connect')}
                </Button>
                <Button
                  variant="contained"
                  sx={theme.actionButton}
                  href={formRef}
                  title={t('title.form')}
                  target="_blank"
                  rel="noopener noreferrer">
                  {t('helps.buttons.form_register')}
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </Box>
  );
};

export default TopBannerHelps;
