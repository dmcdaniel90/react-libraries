import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Item from './Item';
import { memo, useEffect } from 'react';
import { sortBy } from 'lodash';
import { motion } from 'framer-motion';

const List = memo(({ list }) => {
  const sortedList = sortBy(list, 'title');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      style={{ margin: '0', padding: '0' }}
    >
      <Grid
        container
        spacing={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {sortedList.map(item => (
          <Grid key={item.objectID} columns={{ xs: 12, sm: 6, md: 4 }}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
});

export default List;
