import React, { useState } from 'react';

import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';

import { nsColors } from '../utils/colors';
import { capitalize, getFlags } from '../utils/helpers';
import seed from '../docs/search.json';

// Base API URL
const baseApiUrl = `https://nutri-score-app-api.ew.r.appspot.com/`;

const Search = () => {
  // Text input query
  const [query, setQuery] = useState('');
  // API response
  const [apiResult, setApiResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(25);

  // Event listener to search on Enter
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
      // Checks whether the pressed key is "Enter"
      searchIsValid() && onSearch();
    }
  });

  // Search is valid and complete
  const searchIsValid = () => {
    if (!!query) return true;
    return false;
  };

  // Search button
  const onSearch = async () => {
    setIsLoading(true);
    // Fetch Search API
    const rows =
      process.env.NODE_ENV === 'development'
        ? // Use local Database
          seed.map((r, i) => ({ ...r, id: i }))
        : // Use OFF Database
          fetch(`${baseApiUrl}search?q=${JSON.stringify(query)}`)
            .then((res) => res.json())
            .then((res) => res.map((r, i) => ({ ...r, id: i })));
    setIsLoading(false);
    setApiResult(rows);
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
          required
          value={query}
          variant="outlined"
        />
        <Button
          disabled={!searchIsValid()}
          onClick={onSearch}
          variant="contained"
        >
          Buscar
        </Button>
      </Stack>
      {apiResult && (
        <div style={{ height: '72vh', marginTop: '24px', width: '100%' }}>
          <DataGrid
            aria-label="Tabla de resultados"
            autoPageSize
            // checkboxSelection
            columns={columns}
            density="compact"
            initialState={{
              sorting: {
                sortModel: [
                  {
                    field: 'custom_sort',
                    sort: 'asc',
                  },
                ],
              },
            }}
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
    field: 'custom_sort',
    flex: 1,
    editable: false,
    headerName: 'Sort',
    hide: true,
    valueGetter: (params) =>
      params.row.nutriscore_data.nutri_score
        ? params.row.nutriscore_data.nutri_score.charCodeAt(0)
        : 102,
  },
  {
    align: 'center',
    field: 'nutriscore_data',
    flex: 1,
    headerName: 'Nutri-Score',
    editable: false,
    renderCell: (params) => {
      return (
        <p
          style={{
            background:
              nsColors[capitalize(params.row.nutriscore_data.nutri_score)],
            borderRadius: '16px',
            color: 'white',
            fontWeight: 'bold',
            padding: '2px 8px',
          }}
        >
          {capitalize(params.row.nutriscore_data.nutri_score)}
        </p>
      );
    },
  },
  {
    field: 'name',
    flex: 3,
    headerName: 'Nombre',
  },
  {
    field: 'brands',
    flex: 2,
    headerName: 'Brands',
    valueGetter: (params) => {
      return params.row.brands.map((b, i) =>
        i === 0 ? capitalize(b) : ' ' + capitalize(b)
      );
    },
  },
  {
    field: 'countries',
    flex: 1.5,
    headerName: 'Countries',
    valueGetter: (params) => {
      // let unique = [...new Set(params.row.countries)];
      return params.row.countries.map((c, i) =>
        i === 0 ? getFlags(c) : ' ' + getFlags(c)
      );
    },
  },
  {
    field: 'energy',
    flex: 1,
    headerName: 'Energía (KJ)',
    valueGetter: (params) => params.row.nutriscore_data.points_a.energy,
    valueFormatter: (params) =>
      (Math.round(params.value * 100) / 100).toFixed(2),
  },
  {
    field: 'sugars',
    flex: 1,
    headerName: 'Azúcares (g)',
    valueGetter: (params) => params.row.nutriscore_data.points_a.sugars,
    valueFormatter: (params) =>
      (Math.round(params.value * 100) / 100).toFixed(2),
  },
  {
    field: 'saturated_fats',
    flex: 1,
    headerName: 'Grasas (g)',
    valueGetter: (params) => params.row.nutriscore_data.points_a.saturated_fats,
    valueFormatter: (params) =>
      (Math.round(params.value * 100) / 100).toFixed(2),
  },
  {
    field: 'sodium',
    flex: 1,
    headerName: 'Sodio (g)',
    valueGetter: (params) => params.row.nutriscore_data.points_a.sodium,
    valueFormatter: (params) =>
      (Math.round(params.value * 100) / 100).toFixed(2),
  },
  {
    field: 'fruit_and_vegetables',
    flex: 1,
    headerName: 'Frutas y vegetales (%)',
    valueGetter: (params) =>
      params.row.nutriscore_data.points_c.fruits_and_vegetables,
    valueFormatter: (params) =>
      (Math.round(params.value * 100) / 100).toFixed(2),
  },
  {
    field: 'fibre',
    flex: 1,
    headerName: 'Fibra (g)',
    valueGetter: (params) => params.row.nutriscore_data.points_c.fibre,
    valueFormatter: (params) =>
      (Math.round(params.value * 100) / 100).toFixed(2),
  },
  {
    field: 'protein',
    flex: 1,
    headerName: 'Proteínas (g)',
    valueGetter: (params) => params.row.nutriscore_data.points_c.protein,
    valueFormatter: (params) =>
      (Math.round(params.value * 100) / 100).toFixed(2),
  },
];

export default Search;
