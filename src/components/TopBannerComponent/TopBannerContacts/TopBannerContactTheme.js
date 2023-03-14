const theme = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    maxWidth: '80%',
    margin: '15px 0',
  },
  subtitle: {
    fontSize: 'clamp(1.5rem, calc(1rem + 1.5vw), 3rem)',
    lineHeight: 1.2,
    fontWeight: 600,
    color: 'primary.main',
    mt: 4,
  },
  title: {
    fontSize: 'clamp(2rem, calc(2rem + 3vw), 5rem)',
    lineHeight: 1.2,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: 'primary.contrastText',
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
    alignItems: 'flex-start',
    gap: 3,
    py: 3,
  },
  contacts_title: {
    textTransform: 'uppercase',
    fontWeight: 600,
    color: 'secondary.main',
    mt: 3,
  },
  contacts_phone: {
    display: 'block',    
    color: 'primary.contrastText',
    fontSize: '1.5rem',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.7,
    },
  },
};

export default theme;
