import phoneIco from '../../assets/images/icons/icon-phone.svg';

export const theme = {
  footer: {
    width: '100vw',
    marginLeft: 'calc(50% - 50vw)',
    backgroundColor: '#fff',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px 15px',
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
  },
  phones: {
    display: 'grid',
    gap: 3,
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  phone: {
    display: 'block',
    whiteSpace: 'nowrap',
    fontSize: '1.5rem',
    color: '#000',
    cursor: 'pointer',
    position: 'relative',
    paddingLeft: '40px',
    textDecoration: 'none',
    '&::before': {
      content: '""',
      backgroundImage: `url(${phoneIco})`,
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
  email: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '600',
    color: '#000',
    fontSize: '1.5rem',
    margin: '20px 10px',
  },
  logos: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  copyright: {
    display: 'flex',
    gap: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    padding: '15px 0',
    color: '#9e9e9e',
  },
};
