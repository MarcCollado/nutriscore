import React, { useState } from 'react';
import { Stack } from '@mui/material';

import Detail from './Detail';
import Form from './Form';
import NutriScore from './NutriScore';
import Suggestions from './Suggestions';

const App = () => {
  // Form data
  const [formData, setFormData] = useState(null);
  // API response
  const [apiResult, setApiResult] = useState(null);

  return (
    <Stack spacing={4} direction="column" alignItems="center">
      <Form setApiResult={setApiResult} setFormData={setFormData}></Form>
      {apiResult ? <NutriScore apiResult={apiResult} /> : null}
      {apiResult ? <Detail apiResult={apiResult} formData={formData} /> : null}
      {apiResult ? <Suggestions apiResult={apiResult} /> : null}
    </Stack>
  );
};

export default App;
