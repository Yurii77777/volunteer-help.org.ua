import Box from '@mui/material/Box';
import theme from './TopBannerHelpsTheme';
import CardComponent from '../../UIcomponents/Card/CardComponent';
import ButtonComponent from '../../UIcomponents/Button/ButtonComponent';
import CardActions from '@mui/material/CardActions';
import data from './index';
import { useTranslation } from 'react-i18next';

const TopBannerHelps = () => {
  const { t } = useTranslation();
  return (
    <Box sx={theme.info}>
      {data.map(({ id, title, description, formRef, category }) => {
        return (
          <CardComponent
            title={t(`helps.${category}.${title}`)}
            description={t(`helps.${category}.${description}`)}
            key={id}>
            <CardActions sx={theme.card_button}>
              <ButtonComponent
                text={t('helps.buttons.connect')}
                href="mailto:helping.children.ua@gmail.com"
                title={t('title.email')}
              />
              <ButtonComponent
                text={t('helps.buttons.form_register')}
                href={formRef}
                title={t('title.form')}
                target="_blank"
                rel="noopener noreferrer"
              />
            </CardActions>
          </CardComponent>
        );
      })}
    </Box>
  );
};

export default TopBannerHelps;
