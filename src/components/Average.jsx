import React from 'react';
import { Box, Typography } from '@mui/material';

import { nsProperties } from '../utils/maps';

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
        {/* TODO: update name labels in spanish */}
        <Typography sx={{ mt: 1.5, mb: 0.5 }}>
          {nsProperties(property)}
        </Typography>
        <Typography
          sx={{
            opacity: 0.75,
            padding: '2px',
          }}
        >
          {(Math.round(average * 100) / 100).toFixed(2)}
        </Typography>
        <Typography
          sx={{
            fontSize: 'smaller',
            fontWeight: 'bold',
            color: currentValue < average ? 'green' : 'red',
            mb: 1,
            opacity: 0.75,
          }}
        >
          {(Math.round(currentValue * 100) / 100).toFixed(2)}
        </Typography>
      </Box>
    )
  );
};

export default Average;
