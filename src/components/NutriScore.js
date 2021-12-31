import React from 'react';
import { Box, Grid } from '@mui/material';

const NutriScore = ({ apiResult }) => {
  return (
    apiResult && (
      <Grid container justifyContent="center">
        <Box
          component="img"
          /*sx={{
            height: 108,
            width: 200,
          }}*/
          alt={`Nutri-Score ${apiResult?.nutri_score}`}
          src={require(`../assets/img/nutri_score_${apiResult?.nutri_score.toLowerCase()}.png`)}
          srcset = {`${require(`../assets/img/nutri_score_${apiResult?.nutri_score.toLowerCase()}_2x.png`)} 2x`}
        />
      </Grid>
    )
  );
};

export default NutriScore;
