import { Box, FormControl, Select, MenuItem } from '@mui/material';
import { i18n } from '../../../i18n';

import { languagesItems } from './languagesItems';
import { theme } from './LanguagesTheme';

export const Languages = () => {
  let selectedLanguage = null;
  const languageValueInls = localStorage.getItem('i18nextLng');

  !languageValueInls && (selectedLanguage = 'ua');

  if (languageValueInls) {
    const from = languageValueInls.search('-') + 1;
    selectedLanguage = languageValueInls.substring(from, languageValueInls.length);
  }

  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    console.log('[selectedLanguage]', selectedLanguage);

    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('i18nextLng', selectedLanguage);
  };

  return (
    <Box sx={theme.selectWrapper}>
      <FormControl fullWidth>
        <Select
          labelId="language-select-standard-label"
          id="language-select-standard"
          defaultValue={selectedLanguage}
          onChange={(e) => handleChangeLanguage(e)}
          sx={theme.menuItem}>
          {languagesItems.map(({ id, title, value }) => (
            <MenuItem key={id} value={value}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
