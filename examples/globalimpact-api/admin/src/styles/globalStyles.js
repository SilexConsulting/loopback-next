
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

const styles = makeStyles((theme) => ({
  app: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  block: {
    display: 'block !important',
  },
  show: {
    display: 'block !important',
    opacity: 1,
  },
  hide: {
    display: 'none !important',
    opacity: 0,
  },
  h100: {
    height: '100%',
  },
  w100: {
    width: '100%',
  },
  pushRight: {
    marginLeft: 'auto !important',
  },
  pushLeft: {
    marginRight: 'auto !important',
  },
  spaceLeft: {
    paddingLeft: theme.spacing(2),
  },
}));

export default styles;
