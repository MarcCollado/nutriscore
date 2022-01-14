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
import { createCell, tableAValues, tableCValues } from '../utils/tables';

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
      {/* Color gradient */}
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
        ? createCell(apiResult.points_a.a, key, notBeveragesEnergy)
        : createCell(apiResult.points_a.a, key, beveragesEnergy)}
      {/* Sugars */}
      {formData.category !== 'beverages'
        ? createCell(apiResult.points_a.b, key, notBeveragesSugars)
        : createCell(apiResult.points_a.b, key, beveragesSugars)}
      {/* Saturated fats / Saturated fats and lipids */}
      {formData.category !== 'fats'
        ? key === 0
          ? createCell(apiResult.points_a.c, key, '≤ ' + (key + 1))
          : createCell(apiResult.points_a.c, key, '> ' + key)
        : createCell(apiResult.points_a.c, key, saturatedFatsAndLipids)}
      {/* Sodium */}
      {createCell(apiResult.points_a.d, key, sodium)}
    </TableRow>
  );

  const createPointsCTableRow = (
    beveragesFruitsAndVegetables,
    fibre,
    key,
    notBeveragesFruitsAndVegetables,
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
            ? createCell(
                apiResult.points_c.a,
                key,
                beveragesFruitsAndVegetables
              )
            : createCell(
                apiResult.points_c.a,
                key,
                notBeveragesFruitsAndVegetables
              )}
          {/* Fibre */}
          {createCell(apiResult.points_c.b, key, fibre)}
          {/* Proteins */}
          {createCell(apiResult.points_c.c, key, proteins)}
        </TableRow>
      );
    }
  };

  return (
    apiResult && (
      <NutriCard>
        <Grid container spacing={6}>
          {/* Points A table */}
          <Grid item xs={12} lg={6}>
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
                  {tableAValues.map((r) => createPointsATableRow(...r))}
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
          </Grid>
          {/* Points C table */}
          <Grid item xs={12} lg={6}>
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
                  {tableCValues.map((r) => createPointsCTableRow(...r))}
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
          </Grid>
          {/* How it was calculated table */}
          <Grid item xs={12} lg={6}>
            <Typography sx={{ mb: 1 }} variant="h5">
              🤔 Cómo se calculó mi Nutri-Score
            </Typography>
            <TableContainer>
              <Table aria-label="How table">
                <TableBody>
                  <TableRow key={0}>
                    <TableCell
                      component="th"
                      scope="col"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {'Puntos A ≥ 11'}
                    </TableCell>
                    <TableRow>
                      <TableCell
                        sx={{
                          backgroundColor:
                            apiResult.points_a.score >= 11 &&
                            apiResult.points_c.a >= 5
                              ? 'LightGrey'
                              : '#ffffff',
                        }}
                      >
                        {'Puntos de frutas y vegetales '}
                        {formData.category !== 'beverages' ? '=' : '≥'} 5:
                        <br />
                        {'Puntuación final = Puntos A - Puntos C'}
                        {apiResult.points_a.score >= 11 &&
                          apiResult.points_c.a >= 5 &&
                          ' = ' + apiResult.final_score}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          backgroundColor:
                            apiResult.points_a.score >= 11 &&
                            apiResult.points_c.a < 5
                              ? 'LightGrey'
                              : '#ffffff',
                        }}
                      >
                        {'Puntos de frutas y vegetales < 5:'}
                        <br />
                        {
                          'Puntuación final = Puntos A - (puntos de fibra + puntos de frutas y vegetales)'
                        }
                        {apiResult.points_a.score >= 11 &&
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
                          apiResult.points_a.score < 11
                            ? 'LightGrey'
                            : '#ffffff',
                      }}
                    >
                      {'Puntuación final = Puntos A - Puntos C'}
                      {apiResult.points_a.score < 11 &&
                        ' = ' + apiResult.final_score}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          {/* My score */}
          <Grid item xs={12} lg={6}>
            <Typography sx={{ mb: 1 }} variant="h5">
              🏆 Mi puntuación
            </Typography>
            <TableContainer>
              <Table aria-label="Detail table">
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
                      sx={{ fontWeight: 'bold' }}
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
                      sx={{ fontWeight: 'bold' }}
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
                      sx={{ fontWeight: 'bold' }}
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
                      sx={{ fontWeight: 'bold' }}
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
                      sx={{ fontWeight: 'bold' }}
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
          </Grid>
        </Grid>
      </NutriCard>
    )
  );
};

export default Detail;
