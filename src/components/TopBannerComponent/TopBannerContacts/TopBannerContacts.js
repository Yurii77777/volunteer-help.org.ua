import { Typography, Box } from '@mui/material';
import trident from '../../../assets/images/trident.webp';
import { useTranslation } from 'react-i18next';
import theme from './TopBannerContactTheme';
import links from '../../../constants';
import Link from '@mui/material/Link';

const TopBannerContacts = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box sx={theme.wrapper}>
        <Box component="img" alt="trident logo" src={trident} sx={theme.subtitle_logo} />
        <Typography sx={theme.subtitle} variant="body1">
          {t('top_banner.contacts.subtitle')}
        </Typography>
      </Box>
      <Typography sx={theme.title} variant="h1">
        {t('top_banner.contacts.title')}
      </Typography>
      <Box sx={theme.contacts_wrapper}>
        <Typography variant="body1" sx={theme.contacts_title}>
          {t('top_banner.contacts.contacts_title')}
        </Typography>
        <Box>
          {links.map(({ id, tel, title }) => {
            return (
              <Link
                sx={id === 1 ? theme.contacts_phone_ua : theme.contacts_phone_word}
                href={`tel:${tel}`}
                title={t(`title.${title}`)}
                key={id}>
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
