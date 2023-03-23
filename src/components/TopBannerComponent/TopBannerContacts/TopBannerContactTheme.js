export const theme = {
  subtitle: {
    maxWidth: '80%',    
    fontSize: 'clamp(0.2rem, calc(1rem + 0.5vw), 1.6rem)',
    lineHeight: 1.2,
    fontWeight: 600,
    color: 'primary.main',
    mt: 4,
  },
  title: {
    fontSize: 'clamp(0.5rem, calc(2rem + 0.5vw), 3.2rem)',
    lineHeight: 1.2,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: 'primary.contrastText',
    maxWidth: '80%',
    margin: '3.7vw 0',
  },
  contacts_wrapper: {
    display: 'flex',
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  contacts_phone: {
    display: 'block',
    color: 'primary.contrastText',
    fontSize: 'clamp(0.8rem, 1vw, 1.5rem)',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.7,
    },
  },
};
