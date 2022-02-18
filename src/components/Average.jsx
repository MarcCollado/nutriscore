import React from 'react';
import { Box } from '@mui/material';

const Average = ({ apiResult, nutriTarget, property }) => {
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
          border: '1px solid black',
          mx: 'auto',
        }}
      >
        {average}
        {nutriTarget}
        <br></br>
        {property}
      </Box>
    )
  );
};

export default Average;
