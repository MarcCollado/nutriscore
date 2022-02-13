import React from 'react';
import { Box } from '@mui/material';

import { NutriCard } from '../utils/containers';

const NutriScore = ({ apiResult }) => {
  console.log(apiResult?.nutriscore_data?.nutri_score.toLowerCase());
  const letter = apiResult?.nutriscore_data?.nutri_score.toLowerCase();

  // TODO: highlight color
  return (
    !!apiResult.nutriscore_data.nutri_score && (
      <NutriCard>
        <Box
          component="img"
          sx={{
            mx: 'auto',
            maxWidth: { xs: 200, sm: 275 },
          }}
          alt="Nutri-Score"
          src={require(`../assets/img/nutri_score_${letter}_2x.png`)}
        />
      </NutriCard>
    )
  );
};

export default NutriScore;
