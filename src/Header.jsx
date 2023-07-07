import { Typography } from '@mui/material';
import { motion, animate } from 'framer-motion';

const Header = () => {
  const welcome = {
    greeting: 'Hey',
    title: 'React',
    subtitle: 'A list of React libraries and frameworks',
  };

  const { greeting, title, subtitle } = welcome;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.0,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      style={{ margin: 0, padding: 0 }}
    >
      <Typography
        variant="h1"
        sx={{ color: '#646cff', fontWeight: '700', marginBottom: '1rem' }}
      >
        {greeting}, {title}
      </Typography>
      <img
        src="src/assets/react.svg"
        alt="React Logo"
        width="96"
        height="96"
        style={{ margin: '0 auto', marginBottom: '1rem' }}
      />
      <Typography variant="h5" sx={{ color: 'black', fontWeight: '400' }}>
        {subtitle}
      </Typography>
    </motion.div>
  );
};

export default Header;
