import React from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { tableColors } from '../utils/colors';
import { NutriCard } from '../utils/containers';

const Detail = ({ apiResult, formData }) => {
  const createPointsATableRow = (
    beveragesEnergy,
    beveragesSugars,
    saturatedFatsAndLipids,
    key,
    notBeveragesEnergy,
    notBeveragesSugars,
    sodium
  ) => (
    <TableRow key={key}>
      <TableCell
        align="right"
        component="th"
        scope="row"
        sx={{ backgroundColor: tableColors.pointsA[key] }}
      >
        {key}
      </TableCell>
      {/* Energy */}
      {formData.category !== 'beverages'
        ? createTableCell(apiResult.points_a.a, key, notBeveragesEnergy)
        : createTableCell(apiResult.points_a.a, key, beveragesEnergy)}
      {/* Sugars */}
      {formData.category !== 'beverages'
        ? createTableCell(apiResult.points_a.b, key, notBeveragesSugars)
        : createTableCell(apiResult.points_a.b, key, beveragesSugars)}
      {/* Saturated fats / Saturated fats and lipids */}
      {formData.category !== 'fats'
        ? key === 0
          ? createTableCell(apiResult.points_a.c, key, '≤ ' + (key + 1))
          : createTableCell(apiResult.points_a.c, key, '> ' + key)
        : createTableCell(apiResult.points_a.c, key, saturatedFatsAndLipids)}
      {/* Sodium */}
      {createTableCell(apiResult.points_a.d, key, sodium)}
    </TableRow>
  );

  const createPointsCTableRow = (
    beveragesFruitsAndVegetables,
    fibre,
    notBeveragesFruitsAndVegetables,
    key,
    proteins
  ) => {
    // Only beverages can earn up to 10 points C
    if (formData.category !== 'beverages' && key > 5) {
      return null;
    } else {
      return (
        <TableRow key={key}>
          <TableCell
            align="right"
            component="th"
            scope="row"
            sx={
              // Use different color scale for beverages -> Fruit goes to 10
              formData.category !== 'beverages'
                ? key <= 5 && {
                    backgroundColor: tableColors.pointsC.notBeverages[key],
                  }
                : { backgroundColor: tableColors.pointsC.beverages[key] }
            }
          >
            {key}
          </TableCell>
          {/* Fruits and vegetables */}
          {formData.category === 'beverages'
            ? createTableCell(
                apiResult.points_c.a,
                key,
                beveragesFruitsAndVegetables
              )
            : createTableCell(
                apiResult.points_c.a,
                key,
                notBeveragesFruitsAndVegetables
              )}
          {/* Fibre */}
          {createTableCell(apiResult.points_c.b, key, fibre)}
          {/* Proteins */}
          {createTableCell(apiResult.points_c.c, key, proteins)}
        </TableRow>
      );
    }
  };

  const createTableCell = (comparison, key, text) => (
    <TableCell
      align="right"
      sx={{
        backgroundColor: comparison === key ? 'LightGrey' : '#ffffff',
      }}
    >
      {text}
    </TableCell>
  );

  return (
    apiResult && (
      <Grid container spacing={2}>
        {/* Points A table */}
        <Grid item xs={12} lg={6}>
          <NutriCard>
            <Typography sx={{ mb: 1 }} variant="h5">
              🔬 Detalle de puntos A
            </Typography>
            <TableContainer>
              <Table size="small" aria-label="Detail table A">
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
                  <TableRow key="11">
                    <TableCell align="right" component="th" scope="row">
                      Resultados
                    </TableCell>
                    <TableCell align="right">
                      a = {apiResult.points_a.a}
                    </TableCell>
                    <TableCell align="right">
                      b = {apiResult.points_a.b}
                    </TableCell>
                    <TableCell align="right">
                      c = {apiResult.points_a.c}
                    </TableCell>
                    <TableCell align="right">
                      d = {apiResult.points_a.d}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography sx={{ mt: 2 }} variant="h6">
              Puntos A = a + b + c + d = {apiResult.points_a.score}
            </Typography>
          </NutriCard>
        </Grid>
        {/* Points C table */}
        <Grid item xs={12} lg={6}>
          <NutriCard>
            <Typography sx={{ mb: 1 }} variant="h5">
              🔬 Detalle de puntos C
            </Typography>
            <TableContainer>
              <Table size="small" aria-label="Detail table C">
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
                  {createPointsCTableRow('≤ 40', '≤ 0,7', '≤ 40', 0, '≤ 1,6')}
                  {createPointsCTableRow('-', '> 0,7', '> 40', 1, '> 1,6')}
                  {createPointsCTableRow('> 40', '> 1,4', '> 60', 2, '> 3,2')}
                  {createPointsCTableRow('-', '> 2,1', '-', 3, '> 4,8')}
                  {createPointsCTableRow('> 60', '> 2,8', '-', 4, '> 6,4')}
                  {createPointsCTableRow('-', '> 3,5', '> 80', 5, '> 8,0')}
                  {createPointsCTableRow('-', '-', '-', 6, '-')}
                  {createPointsCTableRow('-', '-', '-', 7, '-')}
                  {createPointsCTableRow('-', '-', '-', 8, '-')}
                  {createPointsCTableRow('-', '-', '-', 9, '-')}
                  {createPointsCTableRow('> 80', '-', '-', 10, '-')}
                  {/* Category score */}
                  <TableRow key="11">
                    <TableCell align="right" component="th" scope="row">
                      Resultados
                    </TableCell>
                    <TableCell align="right">
                      a = {apiResult.points_c.a}
                    </TableCell>
                    <TableCell align="right">
                      b = {apiResult.points_c.b}
                    </TableCell>
                    <TableCell align="right">
                      c = {apiResult.points_c.c}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography sx={{ mt: 2 }} variant="h6">
              Puntos C = a + b + c = {apiResult.points_c.score}
            </Typography>
          </NutriCard>
        </Grid>
        {/* How it was calculated table */}
        <Grid item xs={12} lg={6}>
          <NutriCard>
            <Typography sx={{ mb: 1 }} variant="h5">
              🤔 Cómo se calculó mi Nutri-Score
            </Typography>
            <TableContainer>
              <Table sx={{ minWidth: 400 }} aria-label="How table">
                <TableBody>
                  <TableRow key={0}>
                    <TableCell
                      component="th"
                      scope="col"
                      style={{ fontWeight: 'bold' }}
                    >
                      {'Puntos A ≥ 11'}
                    </TableCell>
                    <TableRow>
                      <TableCell
                        sx={{
                          backgroundColor:
                            apiResult.points_a.a +
                              apiResult.points_a.b +
                              apiResult.points_a.c +
                              apiResult.points_a.d >=
                              11 && apiResult.points_c.a >= 5
                              ? 'LightGrey'
                              : '#ffffff',
                        }}
                      >
                        {'Puntos de frutas y vegetales '}
                        {formData.category !== 'beverages' ? '=' : '≥'} 5:
                        <br />
                        {'Puntuación final = Puntos A - Puntos C'}
                        {apiResult.points_a.a +
                          apiResult.points_a.b +
                          apiResult.points_a.c +
                          apiResult.points_a.d >=
                          11 &&
                          apiResult.points_c.a >= 5 &&
                          ' = ' + apiResult.final_score}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          backgroundColor:
                            apiResult.points_a.a +
                              apiResult.points_a.b +
                              apiResult.points_a.c +
                              apiResult.points_a.d >=
                              11 && apiResult.points_c.a < 5
                              ? 'LightGrey'
                              : '#ffffff',
                        }}
                      >
                        {'Puntos de frutas y vegetales < 5:'}
                        <br />
                        {
                          'Puntuación final = Puntos A - (puntos de fibra + puntos de frutas y vegetales)'
                        }
                        {apiResult.points_a.a +
                          apiResult.points_a.b +
                          apiResult.points_a.c +
                          apiResult.points_a.d >=
                          11 &&
                          apiResult.points_c.a < 5 &&
                          ' = ' + apiResult.final_score}
                      </TableCell>
                    </TableRow>
                  </TableRow>
                  <TableRow key={1}>
                    <TableCell
                      component="th"
                      scope="col"
                      style={{ fontWeight: 'bold' }}
                    >
                      {'Puntos A < 11'}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor:
                          apiResult.points_a.a +
                            apiResult.points_a.b +
                            apiResult.points_a.c +
                            apiResult.points_a.d <
                          11
                            ? 'LightGrey'
                            : '#ffffff',
                      }}
                    >
                      {'Puntuación final = Puntos A - Puntos C'}
                      {apiResult.points_a.a +
                        apiResult.points_a.b +
                        apiResult.points_a.c +
                        apiResult.points_a.d <
                        11 && ' = ' + apiResult.final_score}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </NutriCard>
        </Grid>
        <Grid item xs={12} lg={6}>
          <NutriCard>
            <Typography sx={{ mb: 1 }} variant="h5">
              🏆 Mi puntuación
            </Typography>
            <TableContainer>
              <Table sx={{ minWidth: 400 }} aria-label="Detail table">
                {/* Table headers */}
                <TableHead>
                  <TableRow>
                    <TableCell>Puntuación final</TableCell>
                    <TableCell>Nutri-Score</TableCell>
                  </TableRow>
                </TableHead>
                {/* Table body */}
                <TableBody>
                  <TableRow key={0}>
                    <TableCell
                      component="th"
                      scope="col"
                      style={{ fontWeight: 'bold' }}
                    >
                      {formData.category !== 'beverages'
                        ? 'De -15 a -1'
                        : 'Agua'}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="col"
                      sx={{
                        backgroundColor:
                          apiResult.nutri_score === 'A'
                            ? 'LightGrey'
                            : '#ffffff',
                      }}
                    >
                      A
                    </TableCell>
                  </TableRow>
                  <TableRow key={1}>
                    <TableCell
                      component="th"
                      scope="col"
                      style={{ fontWeight: 'bold' }}
                    >
                      {formData.category !== 'beverages'
                        ? 'De 0 a 2'
                        : 'De -15 a 1'}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="col"
                      sx={{
                        backgroundColor:
                          apiResult.nutri_score === 'B'
                            ? 'LightGrey'
                            : '#ffffff',
                      }}
                    >
                      B
                    </TableCell>
                  </TableRow>
                  <TableRow key={2}>
                    <TableCell
                      component="th"
                      scope="col"
                      style={{ fontWeight: 'bold' }}
                    >
                      {formData.category !== 'beverages'
                        ? 'De 3 a 10'
                        : 'De 2 a 5'}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="col"
                      sx={{
                        backgroundColor:
                          apiResult.nutri_score === 'C'
                            ? 'LightGrey'
                            : '#ffffff',
                      }}
                    >
                      C
                    </TableCell>
                  </TableRow>
                  <TableRow key={3}>
                    <TableCell
                      component="th"
                      scope="col"
                      style={{ fontWeight: 'bold' }}
                    >
                      {formData.category !== 'beverages'
                        ? 'De 11 a 18'
                        : 'De 6 a 9'}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="col"
                      sx={{
                        backgroundColor:
                          apiResult.nutri_score === 'D'
                            ? 'LightGrey'
                            : '#ffffff',
                      }}
                    >
                      D
                    </TableCell>
                  </TableRow>
                  <TableRow key={4}>
                    <TableCell
                      component="th"
                      scope="col"
                      style={{ fontWeight: 'bold' }}
                    >
                      {formData.category !== 'beverages'
                        ? 'De 19 a 40'
                        : 'De 10 a 45'}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="col"
                      sx={{
                        backgroundColor:
                          apiResult.nutri_score === 'E'
                            ? 'LightGrey'
                            : '#ffffff',
                      }}
                    >
                      E
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </NutriCard>
        </Grid>
      </Grid>
    )
  );
};

export default Detail;
