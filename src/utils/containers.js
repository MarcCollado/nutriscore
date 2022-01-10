import { Paper } from '@mui/material';

export const NutriCard = (props) => (
  <Paper
    elevation={4}
    sx={{
      // border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: 4,
      // boxShadow: '0 7px 30px -10px rgba(150,170,180,0.5)',
      mx: 'auto',
      // my: 3,
      p: 4,
      ...props.sx,
    }}
  >
    {props.children}
  </Paper>
);
