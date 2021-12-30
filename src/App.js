import React, { useState } from 'react';
import { Box } from '@mui/material';

import Form from './Form';

const App = () => {
  // API response
  const [apiResult, setApiResult] = useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Form setApiResult={setApiResult}></Form>
      {apiResult ? (
        <Box>
          <h2>Resultado</h2>
          <li>Final score: {apiResult?.final_score}</li>
          <li>Nutri score: {apiResult?.nutri_score}</li>
          <li>Points A:</li>
          <ul>
            <li>A: {apiResult?.points_a.a}</li>
            <li>B: {apiResult?.points_a.b}</li>
            <li>C: {apiResult?.points_a.c}</li>
            <li>D: {apiResult?.points_a.d}</li>
          </ul>
          <li>Points C:</li>
          <ul>
            <li>A: {apiResult?.points_c.a}</li>
            <li>B: {apiResult?.points_c.b}</li>
            <li>C: {apiResult?.points_c.c}</li>
          </ul>
        </Box>
      ) : null}
    </Box>
  );
};

export default App;
