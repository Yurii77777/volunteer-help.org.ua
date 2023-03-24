import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material/';

import logo from '../../../assets/images/co-name.svg';
import { theme } from './CompanyNameComponentTheme';

export const CompanyNameComponent = ({ invertColor }) => {
  return (
    <Link to="/" title="Go to the main page" style={invertColor ? theme.logoLinkInv : theme.logoLink}>
      <Box
        sx={theme.nameComponent}
        component="img"
        alt="Логотип ГО Допомога постраждалим дітям з України"
        src={logo}
        width="225px"
        loading="lazy"
      />
    </Link>
  );
};

CompanyNameComponent.propTypes = {
  invertColor: PropTypes.bool,
};

CompanyNameComponent.defaultProps = {
  invertColor: false,
};
