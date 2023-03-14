import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Phone } from '@mui/icons-material';

import { contacts } from '../../../constants/constants';
import theme from './TopBannerContactTheme';

const TopBannerContacts = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box sx={theme.wrapper}>
        <Typography sx={theme.subtitle} variant="h3">
          {t('top_banner.contacts.subtitle')}
        </Typography>
      </Box>
      <Typography sx={theme.title} variant="h1">
        {t('top_banner.contacts.title')}
      </Typography>
      <Box sx={theme.contacts_wrapper}>
        <Typography variant="h4" sx={theme.contacts_title}>
          {t('top_banner.contacts.contacts_title')}
        </Typography>
        <Box>
          {contacts.map(({ id, tel, title }) => {
            return (
              <Link sx={theme.contacts_phone} href={`tel:${tel}`} title={t(`title.${title}`)} key={id}>
                <Phone />
                {tel}
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TopBannerContacts;
