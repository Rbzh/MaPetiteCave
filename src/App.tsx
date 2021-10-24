import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BottleList } from './components/BottleList';
import { bottlesMock } from './data/BottlesMock';

const useStyles = makeStyles({
  app: {
    padding: '30px'
  },
});

function App() {

  const classes = useStyles();

  return (
    <Box className={classes.app}>
      <BottleList bottles={bottlesMock} />
    </Box>
  );
}

export default App;
