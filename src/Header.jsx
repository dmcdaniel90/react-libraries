import { Typography } from '@mui/material';

const Header = () => {
  const welcome = {
    greeting: 'Hey',
    title: 'React',
    subtitle: 'A list of React libraries and frameworks',
  };

  const { greeting, title, subtitle } = welcome;

  return (
    <>
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
    </>
  );
};

export default Header;
