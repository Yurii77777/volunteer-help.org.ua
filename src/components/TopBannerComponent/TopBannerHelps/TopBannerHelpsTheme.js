const theme = {
  info: {
    display: 'flex',
    flexDirection: {
      xs: 'column',
      md: 'row',
    },
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 3,
    p: 3,
  },
  card: {
    flex: {
      md: '1 1 0px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    p: 2,
  },
  actions: {
    p: 2,
    gap: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  actionButton: {
    '&:hover': {
      bgcolor: 'secondary.main',
      color: 'secondary.contrastText',
    },
  },
  wrapper: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,.2)',
  },
  title: {
    textTransform: 'uppercase',
  },
  subtitle: {},
};

export default theme;
