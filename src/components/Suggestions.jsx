import React, { useState } from 'react';

import {
  Grid,
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
import { NutriCard } from '../utils/containers';

const Suggestions = ({ apiResult, formData }) => {
  const [nutriTarget, setNutriTarget] = useState(
    String.fromCharCode(apiResult.nutri_score.charCodeAt(0) - 1)
  );

  const selectScore = () => {
    let selectValue =
      apiResult.nutri_score === 'B'
        ? ['A']
        : apiResult.nutri_score === 'C'
        ? ['A', 'B']
        : apiResult.nutri_score === 'D'
        ? ['A', 'B', 'C']
        : apiResult.nutri_score === 'E'
        ? ['A', 'B', 'C', 'D']
        : [''];
    if (selectValue !== null && formData.category === 'beverages') {
      return selectValue.shift();
    } else {
      return selectValue;
    }
  };

  return (
    <NutriCard>
      <Grid container>
        <Grid item xs={9} sm={7} md={5} lg={4}>
          <Typography sx={{ mb: 1.5, minWidth: '50vw' }} variant="h5">
            {apiResult.nutri_score === 'A'
              ? 'Tu producto ha alcanzado la máxima puntuación de Nutri-Score:'
              : 'Selecciona el valor de Nutri-Score que quieres conseguir:'}
          </Typography>
          <Select
            defaultValue={nutriTarget}
            fullWidth
            id="nutri-score-target"
            label="Nutri-Score"
            onChange={(e) => setNutriTarget(e.target.value)}
            sx={{
              display: `${apiResult.nutri_score === 'A' ? 'none' : 'block'}`,
              mb: 2,
            }}
          >
            {selectScore().map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
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
                  {/* TODO: stretch the container to fill the empty space */}
                  {apiResult.nutri_score === 'A' ? (
                    <TableCell>
                      No hay ninguna sugerencia, tu producto tiene la puntuación
                      deseada.
                    </TableCell>
                  ) : (
                    <TableCell>
                      {`Reduce tu puntuación final al menos en ` +
                        (nutriTarget === 'A' &&
                        formData.category !== 'beverages'
                          ? 1 + apiResult.final_score
                          : nutriTarget === 'B'
                          ? formData.category === 'beverages'
                            ? apiResult.final_score - 1
                            : apiResult.final_score - 2
                          : nutriTarget === 'C'
                          ? formData.category === 'beverages'
                            ? apiResult.final_score - 5
                            : apiResult.final_score - 10
                          : nutriTarget === 'D' &&
                            formData.category === 'beverages'
                          ? apiResult.final_score - 9
                          : apiResult.final_score - 18)}
                    </TableCell>
                  )}
                </TableRow>
                {apiResult.points_a.score >= 11 &&
                  apiResult.points_c.a < 5 &&
                  apiResult.points_c.c > 0 && (
                    <TableRow>
                      <TableCell>
                        {`Resta al menos ${
                          apiResult.points_a.score - 10
                        } Punto${
                          12 - apiResult.points_a.score !== 1 ? 's' : ''
                        } A o aumenta los puntos de frutas y vegetales como mínimo en ${
                          5 - apiResult.points_c.a
                        } para restar tus Puntos C a la
                      puntuación final`}
                      </TableCell>
                    </TableRow>
                  )}
                {apiResult.points_a.a > 5 && (
                  <TableRow>
                    <TableCell>
                      Intenta que la cantidad de energía sea menor
                    </TableCell>
                  </TableRow>
                )}
                {apiResult.points_a.b > 5 && (
                  <TableRow>
                    <TableCell>
                      La puntuación podría mejorar con menos azúcares
                    </TableCell>
                  </TableRow>
                )}
                {apiResult.points_a.c > 5 && (
                  <TableRow>
                    <TableCell>
                      Sería conveniente reducir la cantidad de grasas
                    </TableCell>
                  </TableRow>
                )}
                {apiResult.points_a.d > 5 && (
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
    </NutriCard>
  );
};

export default Suggestions;
