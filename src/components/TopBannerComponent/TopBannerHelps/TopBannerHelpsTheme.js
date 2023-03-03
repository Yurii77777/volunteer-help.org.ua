const theme = {
  info: {
    display: 'flex',
    width: '100%',
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '45%',
    gap: '10px 20px',
    padding: '20px 15px',
    '&::before': {
      content: '""',
      backgroundColor: 'rgba(255,255,255,.2)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    },
  },
  card_button: {
    padding: '16px',
    justifyContent: 'flex-start',
  },
};

export default theme;
