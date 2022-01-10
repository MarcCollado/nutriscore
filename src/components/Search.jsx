import React from 'react';

import { Autocomplete, Stack, TextField } from '@mui/material';

const Search = () => {
  return (
    <Stack spacing={2} sx={{ mx: 'auto', width: 300 }}>
      <Autocomplete
        disableClearable
        id="seed-products"
        options={seed.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Buscador" />}
        seed
      />
    </Stack>
  );
};

const seed = [
  { title: 'Pechuga de pavo', year: 1994 },
  { title: 'Atun claro', year: 1972 },
  { title: 'Jamón Ibérico', year: 1974 },
  { title: 'Ochío de Baeza', year: 2008 },
  { title: 'Mongetes del ganxet', year: 1957 },
  { title: 'Queso Manchego', year: 1993 },
];

export default Search;
