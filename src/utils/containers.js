import { Box } from '@mui/material';

export const NutriCard = (props) => (
  <Box
    sx={{
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: 4,
      boxShadow: '0 7px 30px -10px rgba(150,170,180,0.5)',
      px: 4,
      py: 3,
      maxWidth: '1200px',
      ...props.sx,
    }}
  >
    {props.children}
  </Box>
);
