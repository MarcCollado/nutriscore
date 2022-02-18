import React from 'react';
import { Box, Typography } from '@mui/material';

import { capitalize } from '../utils/helpers';

const Average = ({ apiResult, nutriTarget, property }) => {
  const currentValue = apiResult.nutriscore_data.points_a[property];
  const similarProducts = apiResult.similar_products.filter(
    (sp) =>
      !!sp.nutriscore_data.points_a[property] &&
      sp.nutriscore_data.nutri_score === nutriTarget
  );
  const totalSimilarProducts = similarProducts.length;
  const totalSum = similarProducts.reduce(
    (prev, cv) => prev + cv.nutriscore_data.points_a[property],
    similarProducts[0].nutriscore_data.points_a[property]
  );
  const average = totalSum / totalSimilarProducts;

  return (
    !!apiResult.nutriscore_data.nutri_score && (
      <Box
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 4,
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography sx={{ mt: 1, mb: 1 }}>{capitalize(property)}</Typography>
        <Typography
          sx={{
            color: currentValue < average ? 'red' : 'green',
            fontWeight: 'bold',
            padding: '2px',
          }}
        >
          {(Math.round(average * 100) / 100).toFixed(2)}
        </Typography>
        <Typography sx={{ opacity: 0.5, mb: 1, fontSize: 'smaller' }}>
          {currentValue}
        </Typography>
      </Box>
    )
  );
};

export default Average;
