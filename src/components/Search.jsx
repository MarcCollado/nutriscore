import React, { useState } from 'react';

import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';

// Base API URL
const baseApiUrl = `https://nutri-score-app-api.ew.r.appspot.com/`;

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  // Submit button
  const onSubmit = async () => {
    // Fetch Search API
    // setResult(true);
    fetch(`${baseApiUrl}search?q=${JSON.stringify(query)}`)
      .then((res) => res.json())
      .then((res) => {
        const rows = res.map((r, i) => {
          r.id = i;
          return r;
        });
        setResult(rows);
      });
  };

  return (
    <Stack spacing={2} sx={{ mx: 'auto', width: '80%' }}>
      <Stack direction="row" spacing={2} sx={{ mx: 'auto', width: 400 }}>
        <TextField
          id="search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          label="Buscador"
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
          required={true}
          value={query}
        />
        <Button onClick={onSubmit} variant="contained">
          Buscar
        </Button>
      </Stack>
      {result && (
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid
            rows={result}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      )}
    </Stack>
  );
};

const columns = [
  { field: 'barcode', headerName: 'Barcode', width: 150, editable: false },
  {
    field: 'name',
    headerName: 'Name',
    width: 250,
    editable: false,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

export default Search;
