import React, { useState } from 'react';

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import Average from './Average';
import { NutriCard } from '../utils/containers';

const Suggestions = ({ apiResult, formData }) => {
  const [nutriTarget, setNutriTarget] = useState(
    String.fromCharCode(apiResult.nutriscore_data.nutri_score.charCodeAt(0) - 1)
  );
  const { nutriscore_data: nutriscoreData } = apiResult;
  const selectScore = () => {
    let selectValue =
      nutriscoreData.nutri_score === 'b'
        ? ['a']
        : nutriscoreData.nutri_score === 'c'
        ? ['a', 'b']
        : nutriscoreData.nutri_score === 'd'
        ? ['a', 'b', 'c']
        : nutriscoreData.nutri_score === 'e'
        ? ['a', 'b', 'c', 'd']
        : [''];
    if (selectValue !== null && nutriscoreData.category === 'beverages') {
      return selectValue.shift();
    } else {
      return selectValue;
    }
  };

  return (
    <NutriCard>
      <Grid container>
        <Grid item xs={9} sm={7} md={5} lg={4}>
          <Typography
            sx={{
              mb: 1.5,
              width: 'clamp(450px, 75vw, 950px);',
            }}
            variant="h5"
          >
            {nutriscoreData.nutri_score === 'a'
              ? '🎯 Tu producto ha alcanzado la máxima puntuación'
              : '🎯 Objetivo Nutri-Score'}
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="select-target">Selecciona un objetivo</InputLabel>
            <Select
              defaultValue={nutriTarget}
              id="nutri-score-target"
              label="Selecciona un objetivo"
              onChange={(e) => setNutriTarget(e.target.value)}
              sx={{
                display: `${
                  nutriscoreData.nutri_score === 'a' ? 'none' : 'block'
                }`,
                mb: 2,
              }}
            >
              {selectScore().map((item) => (
                <MenuItem key={item} value={item}>
                  {item.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TableContainer
            sx={{
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: 4,
            }}
          >
            <Table size="small" aria-label="Suggestions">
              {/* Table headers */}
              <TableHead>
                <TableRow>
                  <TableCell>Sugerencias</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {nutriscoreData.nutri_score === 'a' ? (
                    <TableCell>
                      No hay ninguna sugerencia, tu producto tiene la puntuación
                      deseada.
                    </TableCell>
                  ) : (
                    <TableCell>
                      {`Reduce tu puntuación final al menos en ` +
                        (nutriTarget === 'a' &&
                        nutriscoreData.category !== 'beverages'
                          ? 1 + nutriscoreData.final_score
                          : nutriTarget === 'b'
                          ? nutriscoreData.category === 'beverages'
                            ? nutriscoreData.final_score - 1
                            : nutriscoreData.final_score - 2
                          : nutriTarget === 'c'
                          ? nutriscoreData.category === 'beverages'
                            ? nutriscoreData.final_score - 5
                            : nutriscoreData.final_score - 10
                          : nutriTarget === 'd' &&
                            nutriscoreData.category === 'beverages'
                          ? nutriscoreData.final_score - 9
                          : nutriscoreData.final_score - 18)}
                    </TableCell>
                  )}
                </TableRow>
                {nutriscoreData.points_a.score >= 11 &&
                  nutriscoreData.points_c.a < 5 &&
                  nutriscoreData.points_c.c > 0 && (
                    <TableRow>
                      <TableCell>
                        {`Resta al menos ${
                          nutriscoreData.points_a.score - 10
                        } Punto${
                          12 - nutriscoreData.points_a.score !== 1 ? 's' : ''
                        } A o aumenta los puntos de frutas y vegetales como mínimo en ${
                          5 - nutriscoreData.points_c.a
                        } para restar tus Puntos C a la
                      puntuación final`}
                      </TableCell>
                    </TableRow>
                  )}
                {nutriscoreData.points_a.a > 5 && (
                  <TableRow>
                    <TableCell>
                      Intenta que la cantidad de energía sea menor
                    </TableCell>
                  </TableRow>
                )}
                {nutriscoreData.points_a.b > 5 && (
                  <TableRow>
                    <TableCell>
                      La puntuación podría mejorar con menos azúcares
                    </TableCell>
                  </TableRow>
                )}
                {nutriscoreData.points_a.c > 5 && (
                  <TableRow>
                    <TableCell>
                      Sería conveniente reducir la cantidad de grasas
                    </TableCell>
                  </TableRow>
                )}
                {nutriscoreData.points_a.d > 5 && (
                  <TableRow>
                    <TableCell>
                      Deberías considerar disminuir el sodio
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <Average
            apiResult={apiResult}
            nutriTarget={nutriTarget}
            property="energy"
          ></Average>
        </Grid>
        <Grid item xs={3}>
          <Average
            apiResult={apiResult}
            nutriTarget={nutriTarget}
            property="sugars"
          ></Average>
        </Grid>
        <Grid item xs={3}>
          <Average
            apiResult={apiResult}
            nutriTarget={nutriTarget}
            // TODO: change property
            property="saturated_fats"
          ></Average>
        </Grid>
        <Grid item xs={3}>
          <Average
            apiResult={apiResult}
            nutriTarget={nutriTarget}
            property="sodium"
          ></Average>
        </Grid>
      </Grid>
    </NutriCard>
  );
};

export default Suggestions;
