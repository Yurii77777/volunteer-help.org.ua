import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';
import { theme } from './CardComponentTheme';

const CardComponent = ({ title, description, children }) => {
  return (
    <Card sx={theme.wrapper}>
      <CardContent>
        <Typography variant="body2" sx={theme.title}>
          {title}
        </Typography>
        <Typography variant="body2" sx={theme.subtitle}>
          {description}
        </Typography>
      </CardContent>
      {children}
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default CardComponent;
