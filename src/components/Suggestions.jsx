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

  const selectScore =
    apiResult.nutri_score === 'B'
      ? formData.category === 'beverages'
        ? []
        : ['A']
      : apiResult.nutri_score === 'C'
      ? formData.category === 'beverages'
        ? ['B']
        : ['A', 'B']
      : apiResult.nutri_score === 'D'
      ? formData.category === 'beverages'
        ? ['B', 'C']
        : ['A', 'B', 'C']
      : apiResult.nutri_score === 'E' && formData.category === 'beverages'
      ? ['B', 'C', 'D']
      : ['A', 'B', 'C', 'D'];

  return (
    <NutriCard>
      <Grid container spacing={2}>
        {/*MANTENER EL LAYOUT CUANDO ES A!!!*/}
        {apiResult.nutri_score !== 'A' && (
          <Grid item xs={12} sm={8} md={6} lg={4} xl={2} sx={{ pr: 2 }}>
            <Typography sx={{ mb: 1.5 }} variant="h5">
              Selecciona el valor de Nutri-Score que quieres conseguir:
            </Typography>
            <Select
              defaultValue={nutriTarget}
              fullWidth
              id="nutri-score-target"
              label="Nutri-Score"
              onChange={(e) => setNutriTarget(e.target.value)}
            >
              {selectScore.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        )}
        <TableContainer>
          <Table size="small" aria-label="Suggestions">
            {/* Table headers */}
            <TableHead key={0}>
              <TableRow>
                <TableCell>Sugerencias</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={1}>
                {apiResult.nutri_score === 'A' ? (
                  <TableCell>
                    No hay ninguna sugerencia, tu producto tiene la puntuación
                    deseada.
                  </TableCell>
                ) : (
                  <TableCell>
                    {`Reduce tu puntuación final al menos en ` +
                      (nutriTarget === 'A' && formData.category !== 'beverages'
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
              {/* @danielgbaena — revisa hasta aquí ☝️ */}
              {apiResult.points_a.score >= 11 &&
                apiResult.points_c.a < 5 &&
                apiResult.points_c.c > 0 && (
                  <TableRow key={2}>
                    <TableCell>
                      {`Resta al menos ${apiResult.points_a.score - 10} Punto${
                        12 - apiResult.points_a.score !== 1 ? 's' : ''
                      } A o
                      aumenta los puntos de frutas y vegetales como mínimo en
                      ${5 - apiResult.points_c.a} para restar tus Puntos C a la
                      puntuación final`}
                    </TableCell>
                  </TableRow>
                )}
              {apiResult.points_a.a > 5 && (
                <TableRow>
                  {/*KEYS!*/}
                  <TableCell>
                    Intenta que la cantidad de energía sea menor
                  </TableCell>
                </TableRow>
              )}
              {apiResult.points_a.b > 5 && (
                <TableRow>
                  {/*KEYS!*/}
                  <TableCell>
                    La puntuación podría mejorar con menos azúcares
                  </TableCell>
                </TableRow>
              )}
              {apiResult.points_a.c > 5 && (
                <TableRow>
                  {/*KEYS!*/}
                  <TableCell>
                    Sería conveniente reducir la cantidad de grasas
                  </TableCell>
                </TableRow>
              )}
              {apiResult.points_a.d > 5 && (
                <TableRow>
                  {/*KEYS!*/}
                  <TableCell>Deberías considerar disminuir el sodio</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </NutriCard>
  );
};

export default Suggestions;
