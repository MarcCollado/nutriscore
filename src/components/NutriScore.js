import React from 'react';
import { Box } from '@mui/material';

const NutriScore = ({ apiResult }) => {
  const letter = apiResult?.nutri_score.toLowerCase();

  return (
    apiResult && (
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Nutri-Score"
        src={require(`../assets/img/nutri_score_${letter}.png`)}
      />
    )
  );
};

export default NutriScore;
