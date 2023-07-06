import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Item from './Item';

const List = ({ list }) => {
  return (
    <Grid
      container
      spacing={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {list.map(item => (
        <Grid key={item.objectID} columns={{ xs: 12, sm: 6, md: 4 }}>
          <Item item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
