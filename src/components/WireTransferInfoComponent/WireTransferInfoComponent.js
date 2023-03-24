import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';

import { theme } from './WireTransferInfoComponentTheme';

const fieldsForWireTransferUAH = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const fieldsForWireTransferEUR = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const fieldsCorrespondentsBanks = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

export const WireTransferInfoComponent = () => {
  const { t } = useTranslation();
  return (
    <Box sx={theme.section}>
      <Container sx={theme.container}>
        <Box sx={theme.yellowWrapper}>
          <Typography variant="h2" sx={theme.mainTitle}>
            {t('wireTransferInfo.wireMainTitle').toUpperCase()}
          </Typography>
          <Typography variant="h3" sx={theme.subTitle}>
            {t('wireTransferInfo.wireTransferTitle').toUpperCase()}
          </Typography>
          <Box sx={theme.wireWrapper}>
            <Box sx={theme.infoWrapper}>
              <Typography variant="h4" sx={theme.title}>
                UAH
              </Typography>
              <Box sx={theme.thumb}>
                <ul style={theme.list}>
                  {fieldsForWireTransferUAH.map(({ id }) => (
                    <li key={id}>
                      <Typography sx={theme.text}>{t(`wireTransferInfo.wireTransferFieldsUAH.${id}.field`)}</Typography>
                      <Typography sx={theme.solidText}>
                        {t(`wireTransferInfo.wireTransferFieldsUAH.${id}.value`)}
                      </Typography>
                    </li>
                  ))}
                </ul>
                <Box
                  component="img"
                  sx={theme.image}
                  src={require('../../assets/images/wireTransferInfo/wireTransferInfoMono.webp')}
                  alt="MonoBank QR-code"
                />
              </Box>
            </Box>
            <Box sx={theme.infoWrapper}>
              <Typography variant="h4" sx={{ ...theme.title, marginTop: { xs: '15px', sm: '0px', md: '0px' } }}>
                EUR
              </Typography>
              <Box sx={theme.thumb}>
                <ul style={theme.list}>
                  {fieldsForWireTransferEUR.map(({ id }) => (
                    <li key={id}>
                      <Typography sx={theme.text}>{t(`wireTransferInfo.wireTransferFieldsEUR.${id}.field`)}</Typography>
                      <Typography sx={theme.solidText}>
                        {t(`wireTransferInfo.wireTransferFieldsEUR.${id}.value`)}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box sx={{ margin: '10px 0', textAlign: 'center' }}>
                <Typography variant="p">{t('wireTransferInfo.correspondentsBanks').toUpperCase()}</Typography>
              </Box>
              <Box sx={theme.thumb}>
                <ul style={theme.list}>
                  {fieldsCorrespondentsBanks.map(({ id }) => (
                    <li key={id}>
                      <Typography sx={theme.text}>
                        {t(`wireTransferInfo.fieldsCorrespondentsBanks.${id}.field`)}
                      </Typography>
                      <Typography sx={theme.solidText}>
                        {t(`wireTransferInfo.fieldsCorrespondentsBanks.${id}.value`).toUpperCase()}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
