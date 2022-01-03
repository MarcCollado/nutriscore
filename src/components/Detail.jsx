import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const Detail = ({ apiResult, formData }) => {
  const createPointsATableRow = (
    beveragesEnergy,
    beveragesSugars,
    fatsSaturatedFatsAndLipids,
    key,
    notBeveragesEnergy,
    notBeveragesSugars,
    sodium
  ) => {
    const colors = [
      '#ffffff',
      '#fcece9',
      '#f9d9d3',
      '#f6c6bd',
      '#f4b3a8',
      '#f1a092',
      '#ee8d7c',
      '#ec7a67',
      '#e96751',
      '#e6543b',
      '#e44226',
    ];
    return (
      <TableRow key={key}>
        <TableCell
          align="right"
          component="th"
          scope="row"
          sx={{ backgroundColor: colors[key] }}
        >
          {key}
        </TableCell>
        {/* Energy */}
        {formData.category !== 'beverages'
          ? createTableCell(key, notBeveragesEnergy)
          : createTableCell(key, beveragesEnergy)}
        {/* Sugars */}
        {formData.category !== 'beverages'
          ? createTableCell(key, notBeveragesSugars)
          : createTableCell(key, beveragesSugars)}
        {/* Saturated fats/Saturated fats and lipids */}
        {formData.category !== 'fats'
          ? key === 0
            ? createTableCell(key, '≤ ' + (key + 1))
            : createTableCell(key, '> ' + key)
          : createTableCell(key, fatsSaturatedFatsAndLipids)}
        {/* Sodium */}
        {createTableCell(key, sodium)}
      </TableRow>
    );
  };

  const createTableCell = (key, text) => {
    return (
      <TableCell
        align="right"
        sx={{
          backgroundColor:
            apiResult.points_a.a === key ? 'LightGrey' : '#ffffff',
        }}
      >
        {text}
      </TableCell>
    );
  };

  return (
    apiResult && (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="Detail table">
            {/* Table headers */}
            <TableHead>
              <TableRow>
                <TableCell align="right">Puntos</TableCell>
                <TableCell align="right">Energía (KJ)</TableCell>
                <TableCell align="right">Azúcares (g)</TableCell>
                <TableCell align="right">Grasas saturadas (g)</TableCell>
                <TableCell align="right">Sodio (mg)</TableCell>
              </TableRow>
            </TableHead>
            {/* Table body */}
            <TableBody>
              {createPointsATableRow(
                '≤ 0,0',
                '≤ 0,0',
                '< 10',
                0,
                '≤ 335',
                '≤ 4,5',
                '≤ 90'
              )}
              {createPointsATableRow(
                '≤ 30',
                '≤ 3,0',
                '< 16',
                1,
                '> 335',
                '> 4,5',
                '> 90'
              )}
              {createPointsATableRow(
                '≤ 60',
                '> 13,5',
                '< 22',
                2,
                '> 670',
                '> 9,0',
                '> 180'
              )}
              {createPointsATableRow(
                '≤ 90',
                '≤ 4,5',
                '< 28',
                3,
                '> 1005',
                '> 13,5',
                '> 270'
              )}
              {createPointsATableRow(
                '≤ 120',
                '≤ 6,0',
                '< 34',
                4,
                '> 1340',
                '> 18,0',
                '> 360'
              )}
              {createPointsATableRow(
                '≤ 150',
                '≤ 7,5',
                '< 40',
                5,
                '> 1675',
                '> 22,5',
                '> 450'
              )}
              {createPointsATableRow(
                '≤ 180',
                '≤ 9,0',
                '< 46',
                6,
                '> 2010',
                '> 27,0',
                '> 540'
              )}
              {createPointsATableRow(
                '≤ 210',
                '≤ 10,5',
                '< 52',
                7,
                '> 2345',
                '> 31,0',
                '> 630'
              )}
              {createPointsATableRow(
                '≤ 240',
                '≤ 12,0',
                '< 58',
                8,
                '> 2680',
                '> 36,0',
                '> 720'
              )}
              {createPointsATableRow(
                '≤ 270',
                '≤ 13,5',
                '< 64',
                9,
                '> 3015',
                '> 40,0',
                '> 810'
              )}
              {createPointsATableRow(
                '> 270',
                '> 13,5',
                '≥ 64',
                10,
                '> 3350',
                '> 45,0',
                '> 900'
              )}

              {/* Category score */}
              <TableRow key="11" sx={{ border: 2 }}>
                <TableCell align="right" component="th" scope="row"></TableCell>
                <TableCell align="right">a = {apiResult.points_a.a}</TableCell>
                <TableCell align="right">b = {apiResult.points_a.b}</TableCell>
                <TableCell align="right">c = {apiResult.points_a.c}</TableCell>
                <TableCell align="right">d = {apiResult.points_a.d}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="Detail table">
            {/* Table headers */}
            <TableHead>
              <TableRow>
                <TableCell align="right">Puntos</TableCell>
                <TableCell align="right">Frutas y vegetales (%)</TableCell>
                <TableCell align="right">Fibra (g)</TableCell>
                <TableCell align="right">Proteínas (g)</TableCell>
              </TableRow>
            </TableHead>
            {/* Table body */}
            <TableBody>
              {createPointsATableRow(
                '≤ 0,0',
                '≤ 0,0',
                0,
                '≤ 335',
                '≤ 4,5',
                '≤ 90'
              )}
              {/* Category score */}
              <TableRow key="11" sx={{ border: 2 }}>
                <TableCell align="right" component="th" scope="row"></TableCell>
                <TableCell align="right">a = {apiResult.points_a.a}</TableCell>
                <TableCell align="right">b = {apiResult.points_a.b}</TableCell>
                <TableCell align="right">c = {apiResult.points_a.c}</TableCell>
                <TableCell align="right">d = {apiResult.points_a.d}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  );
};

export default Detail;
