import React, { useState } from 'react';
import { Box } from '@mui/material';

import Detail from './Detail';
import Form from './Form';
import NutriScore from './NutriScore';

const App = () => {
  // Form data
  const [formData, setFormData] = useState(null);
  // API response
  const [apiResult, setApiResult] = useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Form setApiResult={setApiResult} setFormData={setFormData}></Form>
      {apiResult ? <NutriScore apiResult={apiResult} /> : null}
      {apiResult ? <Detail apiResult={apiResult} formData={formData} /> : null}
    </Box>
  );
};

export default App;
