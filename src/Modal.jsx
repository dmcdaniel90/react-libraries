import { Box, Button, Typography, Modal, Tooltip } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ buttonColor, id, description, commands }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCopy = command => {
    navigator.clipboard.writeText(command);
    setCopied(true);
  };

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          color: buttonColor,
          borderColor: buttonColor,
        }}
        onClick={handleOpen}
      >
        Details
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id={`modal-${id}-title `} variant="h4" component="h2">
            {id}
          </Typography>
          <Typography id={`modal-${id}-description`} sx={{ mt: 2 }}>
            <span>
              <Typography variant="h6">{description}</Typography>
            </span>
            {commands.map((command, index) => {
              const key = `modal-${index}`;

              return (
                <div
                  key={key}
                  style={{
                    width: '90%',
                    height: 'auto',
                    padding: '1rem',
                    margin: '1rem auto',
                    boxShadow: '0px 2px 5px 2px rgba(0, 0, 0, 0.2)',
                  }}
                  onClick={() => handleCopy(command)}
                >
                  <Tooltip
                    title={copied ? 'Copied to clipboard' : 'Click to copy'}
                  >
                    <div onClick={() => handleCopy(command)}>{command}</div>
                  </Tooltip>
                </div>
              );
            })}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export { BasicModal };
