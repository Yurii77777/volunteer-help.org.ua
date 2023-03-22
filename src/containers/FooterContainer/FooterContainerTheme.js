export const theme = {
  footer: {
    width: '100vw',
    marginLeft: 'calc(50% - 50vw)',
    backgroundColor: '#fff',
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 3,
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
    fontSize: '1.5rem',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    color: 'text.primary',
    position: 'relative',
    textDecoration: 'none',
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
  emailLink: {
    color: '#000',
  },
  footerBox: {
    width: {
      md: '30%',
    },
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
    p: 2,
    color: 'text.secondary',
  },
};
