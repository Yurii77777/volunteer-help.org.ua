import uaImage from '../../../assets/images/icons/ua.svg';
import wordImage from '../../../assets/images/icons/word.svg';

const theme = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    maxWidth: '80%',
    margin: '15px 0',
  },
  subtitle: {
    fontSize: 'calc(1.8rem + 10 * (100vw / 1920))',
    lineHeight: 1.2,
    fontWeight: 600,
    color: '#0069e7',
  },
  title: {
    fontSize: 'calc(3.2rem + 2.0833333333vw)',
    lineHeight: 1.2,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#fff',
    maxWidth: '80%',
    margin: '5vw 0',
  },
  subtitle_logo: {
    width: '21px',
    marginRight: '16px',
  },
  contacts_wrapper: {
    display: 'flex',
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    justifyContent: 'flexStart',
    alignItems: {
      md: 'center',
      xs: 'flex-start',
    },
  },
  contacts_title: {
    fontSize: '2.4rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    color: '#fd0',
    margin: '0 5vw 2vw 0',
  },
  contacts_phone_ua: {
    display: 'block',
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer',
    position: 'relative',
    paddingLeft: '40px',
    textDecoration: 'none',
    '&::before': {
      content: '""',
      backgroundImage: `url(${uaImage})`,
      width: '24px',
      height: '30px',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      left: '0px',
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
  contacts_phone_word: {
    display: 'block',
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer',
    position: 'relative',
    paddingLeft: '40px',
    textDecoration: 'none',
    '&::before': {
      content: '""',
      backgroundImage: `url(${wordImage})`,
      width: '24px',
      height: '30px',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      left: '0px',
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
};

export default theme;
