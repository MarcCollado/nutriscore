import React, { useState } from 'react';

import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';

// Base API URL
const baseApiUrl = `https://nutri-score-app-api.ew.r.appspot.com/`;

const Search = () => {
  // Text input query
  const [query, setQuery] = useState('');
  // API response
  const [apiResult, setApiResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = React.useState(25);

  // Submit button
  const onSubmit = async () => {
    setIsLoading(true);
    // Fetch Search API
    fetch(`${baseApiUrl}search?q=${JSON.stringify(query)}`)
      .then((res) => {
        setIsLoading(false);
        return res.json();
      })
      .then((res) => {
        const rows = res.map((r, i) => ({ ...r, id: i }));
        setApiResult(rows);
      });
  };

  return (
    <Stack spacing={2} sx={{ mx: 'auto' }}>
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
          onKeyPress={(e) => e.charCode === 13 && onSubmit()}
          required
          value={query}
          variant="outlined"
        />
        <Button onClick={onSubmit} variant="contained">
          Buscar
        </Button>
      </Stack>
      {apiResult && (
        <div style={{ height: '72vh', marginTop: '24px', width: '100%' }}>
          <DataGrid
            aria-label="Tabla de resultados"
            autoPageSize
            checkboxSelection
            columns={columns}
            density="compact"
            loading={isLoading}
            onPageSizeChange={(s) => setPageSize(s)}
            pageSize={pageSize}
            pagination
            rows={apiResult}
            rowsPerPageOptions={[25, 50, 100]}
          />
        </div>
      )}
    </Stack>
  );
};

const columns = [
  {
    field: 'nutriscore_grade',
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 250,
    editable: false,
  },
  {
    field: 'brands',
    headerName: 'Brands',
    width: 150,
    editable: false,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'countries',
    headerName: 'Countries',
    width: 150,
    editable: false,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'energy',
  },
  {
    field: 'sugars',
  },
  {
    field: 'saturated_fats',
  },
  {
    field: 'sodium',
  },
  {
    field: 'fruit_and_vegetables',
  },
  {
    field: 'fibre',
  },
  {
    field: 'protein',
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
