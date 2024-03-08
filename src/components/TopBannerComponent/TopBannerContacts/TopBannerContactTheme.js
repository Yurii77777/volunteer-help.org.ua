export const theme = {
  subtitle: {
    display: 'block',
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: '80%',
    fontSize: 'clamp(0.2rem, calc(1rem + 0.5vw), 1.6rem)',
    lineHeight: 1.2,
    fontWeight: 600,
    color: 'primary.main',
    mt: 4,
  },
  title: {
    display: 'block',
    textAlign: 'center',
    fontSize: 'clamp(0.5rem, calc(2rem + 0.5vw), 3.2rem)',
    lineHeight: 1.2,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: 'primary.contrastText',
    maxWidth: '80%',
    margin: '3.4vw auto',
  },
  contacts_wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    justifyContent: 'space-around',
    alignItems: {
      md: 'flex-end',
      xs: 'center',
    },
    alignI: 'center',
    gap: 3,
    py: 3,
  },
  contacts_title: {
    textTransform: 'uppercase',
    fontSize: 'clamp(0.5rem, calc(1rem + 0.5vw), 1.8rem)',
    fontWeight: 600,
    color: 'secondary.main',
    mt: 3,
  },

  contacts_phone_wrapper: {
    display: 'flex',
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    gap: 3,
  },
  contacts_phone: {
    display: 'block',
    color: 'primary.contrastText',
    fontSize: 'clamp(0.8rem, 1.3vw, 1.7rem)',
    textShadow: '2px 1px 2px #000000',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.7,
    },
  },
};
