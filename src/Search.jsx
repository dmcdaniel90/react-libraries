import { Container, TextField, Typography } from '@mui/material';

const InputWithLabel = ({ type, id, label, value, onInputChange }) => {
  return (
    <Container>
      <TextField
        type={type}
        id={id}
        label={label}
        variant="standard"
        onChange={onInputChange}
        value={value}
        sx={{ marginTop: '1rem', marginBottom: '1rem' }}
        autoFocus
      />
      <Typography
        variant="body2"
        sx={{ color: 'black', marginBottom: '2rem' }}
        gutterBottom
      >
        Searching for: {value}
      </Typography>
    </Container>
  );
};

export default InputWithLabel;
