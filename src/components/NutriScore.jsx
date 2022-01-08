import React from 'react';
import { Box, Typography } from '@mui/material';

import { NutriCard } from '../utils/containers';

const NutriScore = ({ apiResult }) => {
  const letter = apiResult?.nutri_score.toLowerCase();

  return (
    apiResult && (
      <NutriCard>
        <Typography variant="h5">Resultado</Typography>
        <Box
          component="img"
          sx={{
            mx: 'auto',
            my: 1,
            maxWidth: { xs: 200, sm: 250 },
          }}
          alt="Nutri-Score"
          src={require(`../assets/img/nutri_score_${letter}_2x.png`)}
        />
      </NutriCard>
    )
  );
};

export default NutriScore;
