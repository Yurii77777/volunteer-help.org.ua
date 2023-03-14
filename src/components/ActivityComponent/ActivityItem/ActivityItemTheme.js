export const theme = {
  container: {
    display: 'flex',
    width: '100%',
  },
  content: {
    flexBasis: '33.3333%',
    flexGrow: 0,
    maxWidth: '33.3333%',
  },
  info: {
    backgroundColor: '#071739',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '5px',
  },
  title: {
    fontSize: {
      md: '35px',
      sm: '25px',
      xs: '16px',
    },
    color: '#ffffff',
  },
  paper: {
    boxShadow:
      'rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 50%) 0px 3px 14px 2px',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: 'black',
    width: '100%',
  },
  img: {
    height: {
      md: '500px',
      xs: '300px',
    },
    width: '100%',
    objectFit: 'cover',
    '&:hover': {
      opacity: 0.8,
      transition: '0.5s',
    },
  },
};
