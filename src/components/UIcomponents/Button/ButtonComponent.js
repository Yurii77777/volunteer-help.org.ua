import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import theme from './ButtonComponentTheme';

const ButtonComponent = ({
  text,
  color,
  backgroundColor,
  hoverColor,
  padding,
  fontSize,
  minWidth,
  minHeight,
  href,
  title,
  target,
  rel,
}) => {
  return (
    <Button
      href={href}
      rel={rel}
      target={target}
      title={title}
      sx={{
        color: color,
        backgroundColor: backgroundColor,
        padding: padding,
        fontSize: fontSize,
        minWidth: minWidth,
        minHeight: minHeight,
        '&:hover': {
          color: 'white',
          backgroundColor: hoverColor,
        },
        ...theme,
      }}>
      {text}
    </Button>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

ButtonComponent.defaultProps = {
  backgroundColor: '#ffdd00',
  hoverColor: '#0069e7',
  padding: '5px',
  fontSize: 12,
};

export default ButtonComponent;
