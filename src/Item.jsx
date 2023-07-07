import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { BasicModal } from './Modal.jsx';

const Item = ({ item }) => {
  let textColor1 = 'hsla(180, 100%, 25%, 0.75)';
  let textColor2 = 'hsla(180, 100%, 10%, 1)';
  let textColor3 = 'hsla(180, 100%, 25%, 1)';
  let buttonColor = 'hsla(180, 100%, 25%, 0.5)';

  return (
    <Card
      sx={{
        width: '250px',
        height: '20rem',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(255, 255, 255, 0.70)',
        borderRadius: '12px',
        border: '1px solid rgba(209, 213, 219, 0.3)',
        paddingTop: '1.5rem',
      }}
      className="item"
    >
      <CardMedia
        sx={{
          height: '100px',
          width: '100px',
          margin: '0 auto',
          padding: '1rem',
          boxShadow: '0 0 8px 2px rgba(0, 0, 0, 0.2)',
        }}
        component="img"
        image={item.image}
        alt={item.title}
      ></CardMedia>
      <CardContent sx={{ height: '5rem' }}>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontWeight: '700',
            color: textColor1,
          }}
          gutterBottom
        >
          {item.title}
        </Typography>
        <Typography variant="body2">
          <a href={item.url} target="_" style={{ color: textColor3 }}>
            {item.url}
          </a>
        </Typography>

        <Typography variant="body2" style={{ color: textColor2 }}>
          {item.author}
        </Typography>
      </CardContent>

      <BasicModal
        buttonColor={buttonColor}
        id={item.title}
        description={item.description}
        commands={item.commands}
        modalID={item.modalID}
      />
    </Card>
  );
};

export default Item;
