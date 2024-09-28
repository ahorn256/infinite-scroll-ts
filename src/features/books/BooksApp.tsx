import { Grid2 as Grid } from '@mui/material';
import List from './List';

function BooksApp() {
  return (
    <>
      <Grid container
        direction='column'
        alignItems="center"
        paddingLeft={2}
        paddingRight={2}
        rowSpacing={2}
        data-testid='books-grid'>
        <Grid size={{xs:12, md:10}}>
          <List />
        </Grid>
      </Grid>
    </>
  );
}

export default BooksApp;
