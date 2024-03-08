export const theme = {
  info: {
    display: 'flex',
    flexDirection: {
      xs: 'column',
      md: 'row',
    },
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 3,
    py: 3,
  },
  card: {
    flex: {
      md: '1 1 0px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '3px',
  },
  content: {
    p: 2
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: '600',
    textAlign: 'center',
  },
  actions: {
    p: 2,
    gap: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  actionButton: {
    textAlign: 'center',
  }
};
