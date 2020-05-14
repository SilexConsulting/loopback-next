
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#3e8cb2',
    },
    success: {
      main: '#62bf82',
    }
  },
  overrides: {
    root: {
      height: '100%',
    },
    MuiContainer: {
      root: {
      },
      maxWidthLg: {
        maxWidth: '1920px !important',
      }
    },
    MuiGrid: {
      container: {
      }
    },
    MuiTypography: {
      h6: {
        marginBottom: '1em'
      }
    }
  }
});

